import React,{useEffect}from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './project-page.scss';
import DarkModeBtn from '../../components/dark-mode-btn/dark-mode-btn';

const ProjectPage = () => {

     //DARKMODE CONFIG ==>
     const {darkMode} = useTheme();
     useEffect(() => {
         document.body.classList.toggle('body-dark-mode', darkMode);
     }, [darkMode]);
     const float = darkMode ? 'projet__float float projet__float float__darkmode':'projet__float float';

    return (
        <main>
            <section className='project-page'>
                <DarkModeBtn/>
                <div className={float}></div>
                <div className='project-page__box contenair'>
                    <p>project</p> 
                </div>
            </section>
        </main>
    );
};

export default ProjectPage;
