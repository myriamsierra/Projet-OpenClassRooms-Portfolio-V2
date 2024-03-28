import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterConfig from './utils/router-config/router-config.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterConfig />
    </React.StrictMode>
);

