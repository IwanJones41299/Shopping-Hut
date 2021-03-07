import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerReistration from './serviceWorkerRegistration';
import AuthProvider from "./Context/AuthContext";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <AuthProvider>
    <App />
    </AuthProvider>,
  document.getElementById('root')
);

serviceWorkerReistration.register();

reportWebVitals();
