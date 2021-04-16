function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) =>
        console.info(`Service Worker registration complete, scope: '${registration.scope}'`)
      )
      .catch((error) => console.error(`Service Worker registration failed with error: '${error}'`));
  }
}

registerServiceWorker();
