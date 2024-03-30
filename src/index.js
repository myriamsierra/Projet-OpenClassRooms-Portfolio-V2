import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterConfig from './utils/router-config/router-config.jsx';
import { ThemeProvider } from './utils/theme-provider/dark-mode.jsx'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider> 
            <RouterConfig /> 
        </ThemeProvider>
    </React.StrictMode>
);

