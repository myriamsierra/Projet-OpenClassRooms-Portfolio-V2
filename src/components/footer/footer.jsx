import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import { Link } from 'react-router-dom';
import './footer.scss'

const Footer = () => {

     //DARKMODE CONFIG ==>
     const { darkMode} = useTheme();
     const link = darkMode ? 'footer__link footer__link__darkmode':'footer__link';
     const box = darkMode ? 'footer__box footer__box__darkmode':'footer__box';

    return (
        <div className='footer'>
            <div className={link}>
                <Link to="https://github.com/myriamsierra" target="_blank">
                    <i class="fa-brands fa-github-alt"></i> 
                </Link>
                <Link to="mailto:myriamsierra84@gmail.com" target="_blank">
                    <i class="fa-solid fa-at"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/myriam-sierra-507436264/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </Link>
            </div>
            <div className={box}>
                <p>myriamsierra84@gmail.com | 2024</p>
            </div>
        </div>
    );
};

export default Footer;