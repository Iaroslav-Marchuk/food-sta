import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App.jsx';
import Modal from 'react-modal';

import './styles.css';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
