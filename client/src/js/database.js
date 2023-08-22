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

const putDb = async (content) => {
  const db = await initdb();
  await db.add('jate', { content, timestamp: new Date() });
  console.log('Content added to the database');
};

const getDb = async () => {
  const db = await initdb();
  return db.getAll('jate');
};

window.addEventListener('DOMContentLoaded', async () => {
  const allContent = await getDb();
  if (allContent.length > 0) {
    const latestContent = allContent[allContent.length - 1].content;
    const textArea = document.getElementById('textArea');
    textArea.value = latestContent;
  }
});

initdb();
