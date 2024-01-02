import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
        </ClerkProvider>
    </React.StrictMode>
);
