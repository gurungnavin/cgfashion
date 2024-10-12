import { createRoot } from 'react-dom/client'; // Keep only what's necessary
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
