import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './Context/JobData';
import { DarkMode } from './Context/DarkMode';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <DarkMode>
        <App />
      </DarkMode>
    </DataProvider>
  </React.StrictMode>
);