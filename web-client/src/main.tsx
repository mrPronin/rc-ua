import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'fonts/font-styles.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';

const client = new ApolloClient({
  uri: 'https://rc-api-server.captain.regionit.de/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
  headers: {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
// Checking for the presence of the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Disabling the browser window from displaying a request to add a PWA

  // Saving the beforeinstallprompt event for later use
  const deferredPrompt = event;

  // Here you can show a button or other elements offering to add PWA to your desktop
  console.log('Ability to add PWA to the home screen');

  // If you want, you can create your own button or element to trigger the installation event
  // For example, you can call the installation using the button:
  // const installButton = document.createElement('button');
  // installButton.textContent = 'Встановити PWA';
  // installButton.addEventListener('click', () => {
  //   deferredPrompt.prompt();
  // });

  // Or call it automatically after a certain condition:
  // if (condition_for_installation) {
  //   deferredPrompt.prompt();
  // }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('Service Worker registered with success:', registration);
    })
    .catch(function (error) {
      console.log('Error registering a Service Worker:', error);
    });
}