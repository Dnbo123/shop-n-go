import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new instance of the QueryClient
const queryClient = new QueryClient();

// Render the app to the DOM
ReactDOM.render(
  // Wrap the app in a QueryClientProvider
  // This will make the query client available to all descendants of the app
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  // Render the app to the element with the id 'root'
  document.getElementById('root')
);

