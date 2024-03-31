import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './front-page.scss'
import About from '../../components/about/about';
import Home from '../../components/home/home';
import Skills from '../../components/skills/skills';
import Project from '../../components/project/project';
import Contact from '../../components/contact/contact';
import Upload from '../../components/upload/upload';
import DarkModeBtn from '../../components/dark-mode-btn/dark-mode-btn';
import {DarkMode} from '../../utils/fonction/fonction';

const FrontPage = () => {

    //DARKMODE CONFIG ==>
    const {darkMode} = useTheme();
    const text = darkMode ? "endText endText__darkmode":"endText"
    DarkMode(darkMode);
      
    return (
        <main className='front-page'>
            <DarkModeBtn/>
            <Home/>
            <About/>
            <Skills/>
            <Upload/>
            <Project/>
            <Contact/>
            <p className={text}>Merci pour ta visite <i className='fa-solid fa-heart'></i></p>
        </main>
    );
};

export default FrontPage;