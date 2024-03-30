import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import './button.scss';

const Button = ({ text,icon,link }) => {
    const { darkMode } = useTheme();
    const button = darkMode ? "buttonLink buttonLink__darkmode":"buttonLink";

    return (
        <div>
            <div className={button}>
                <Link to={link} target="_blank">
                        <i className={icon} /> 
                        <p>{text}</p>
                </Link>
            </div>
        </div>
    );
};

export default Button;