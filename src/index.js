import React from 'react';
import ReactDOM from 'react-dom/client';
import {Providercontext}  from './Contexts/Context1.jsx'
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Providercontext>
    <App />
    </Providercontext>

);


