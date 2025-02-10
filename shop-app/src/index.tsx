import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

// Create a QueryClient instance to manage caching
const queryClient = new QueryClient();

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// If the root element exists, render the app
if (rootElement) {
  // Create a root element for the app
  const root = ReactDOM.createRoot(rootElement);
  // Render the app
  root.render(
    // Use React.StrictMode to enable strict mode
    <React.StrictMode>
      // Use QueryClientProvider to provide the QueryClient instance to the app
      <QueryClientProvider client={queryClient}>
        // Render the App component
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
