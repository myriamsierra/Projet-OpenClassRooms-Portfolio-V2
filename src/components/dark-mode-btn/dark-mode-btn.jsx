import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import './dark-mode-btn.scss';


const DarkModeBtn = () => {

    //SET-UNSET DARKMODE==>
    const { darkMode, setDarkMode } = useTheme();
    const ChangeDarkMode = () => {setDarkMode(!darkMode);};
    const box = darkMode ? 'dark-mode-btn__box dark-mode-btn__box__darkmode':'dark-mode-btn__box';
    
    return (
        <section className='dark-mode-btn'>
            <div className={box}>
                <div className='button'>
                    <input
                        type="checkbox" 
                        id="input" 
                        className="input"
                        onChange= {ChangeDarkMode}
                        checked={darkMode}
                    />
                    <label htmlFor="input" className="label">
                        <div className="label__switch"></div>
                        <span className="label__icons">
                            <i className="fa-solid fa-sun"></i>
                        </span>
                        <span className="label__icons">
                            <i className="fa-solid fa-moon"></i> 
                        </span>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default DarkModeBtn;