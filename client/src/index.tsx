import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

import DonorsSignUp from './DonorsSignUp';

root.render(
  <React.StrictMode>
    <DonorsSignUp />
  </React.StrictMode>
);

