import React from 'react';
import './front-page.scss'
import About from '../../components/about/about';
import Home from '../../components/home/home';
import Skills from '../../components/skills/skills';
import Project from '../../components/project/project';
import Contact from '../../components/contact/contact';
import Upload from '../../components/upload/upload';
import DarkModeBtn from '../../components/dark-mode-btn/dark-mode-btn';

const FrontPage = () => {
    return (
        <main className='front-page'>
            <DarkModeBtn/>
            <Home/>
            <About/>
            <Skills/>
            <Upload/>
            <Project/>
            <Contact/>
        </main>
    );
};

export default FrontPage;