import React, { createContext, useState, useContext } from 'react';
import FrontPage from '../../pages/front-page/front-page';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
        return (
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                {FrontPage}
                {children}
            </ThemeContext.Provider>
        );
};