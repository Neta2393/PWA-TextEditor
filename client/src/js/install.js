const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt; // To store the event for later use

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Event handler for the `butInstall` button click
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the native install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond
    const result = await deferredPrompt.userChoice;
    // Reset the deferredPrompt
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // App was successfully installed
  console.log('App was successfully installed.');
});
