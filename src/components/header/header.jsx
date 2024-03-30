import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import { HashLink as Link } from 'react-router-hash-link';
import './header.scss'

const Header = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const header = darkMode ? 'header header__darkmode':'header';
    const navlink = darkMode ? 'navlink navlink__darkmode':'navlink';

    return (
        <div className={header}>
            <Link smooth to='/#home'><h1 className="header__logo">/MS</h1></Link>
            <nav className="header__navbar">
                <Link smooth to='/#home' className={navlink}>Accueil</Link>
                <Link smooth to='/#about' className={navlink}>A-propos</Link>
                <Link smooth to='/#skills' className={navlink}>Competences</Link>
                <Link smooth to='/#project' className={navlink}>Projets</Link>
                <Link smooth to='/#contact' className={navlink}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;