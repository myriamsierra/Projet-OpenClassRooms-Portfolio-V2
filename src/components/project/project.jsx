import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './project.scss'
import Title from '../title/title';
import ProjectData from './../../utils/data-base/projectBox.json'

const Project = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const float = darkMode ? 'project__float float project__float float__darkmode':'project__float float';
    const contenair = darkMode ? 'project__box contenair project__box contenair__darkmode':'project__box contenair';
    const border = darkMode ? 'border border__darkmode':'border';

    return (
        <section className='project' id ="project">
            <img className='project__illustration png' src={ProjectData[0].image}alt='illustration etudiant'></img>
            <div className={float}></div>
            <div className={contenair}>
                <div className='project__content'>
                    <div className='project-title'>
                        <Title symbols1={ProjectData[0].symbol1} symbols2={ProjectData[0].symbol2} title={ProjectData[0].title}/>
                        <div className={border}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;