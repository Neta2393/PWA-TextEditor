import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Initialize the database
initdb();

// Logic to add content to the database
export const putDb = async (content) => {
  console.log('PUT to database');

  const contactDb = await openDB('jate', 1);

  const tx = contactDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  const request = store.add({ value: content }); // Use 'add' instead of 'put'

  await tx.complete; // Wait for transaction to complete
  console.log('🚀 - data saved to the database', request.result);
};

// Logic to get all content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const contactDb = await openDB('jate', 1);

  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);

  return result;
};
