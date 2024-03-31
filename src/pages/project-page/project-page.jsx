import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import { useParams, Link } from 'react-router-dom';
import './project-page.scss';
import { DarkMode } from '../../utils/fonction/fonction';
import DataProject from './../../utils/data-base/project.json';
import Button from './../../components/button/button';
import Carousel from '../../components/carousel/carousel';

const ProjectPage = () => {

    //DARKMODE THEME ==>
    const { darkMode } = useTheme();
    DarkMode(darkMode);
    const projectpage = darkMode ? 'project-page project-page__darkmode':'project-page';
    const titleProject = darkMode ? 'titleProject titleProject__darkmode':'titleProject';
    const returnBtn = darkMode ? 'return-btn return-btn__darkmode':'return-btn';
    const skillsBox= darkMode ?  'skillsBox skillsBox__darkmode':'skillsBox';
    const textProject= darkMode ? 'text-project text-project__darkmode':'text-project';
    const techno = darkMode ? 'techno techno__darkmode':'techno';
    const linkProject = darkMode ? 'direction-link direction-link__darkmode': 'direction-link'




    //NEXT-PREVIOUS ==>
    const { id } = useParams();
    const project = DataProject.find((project) => project.id === id);

    const getNextProjectId = () => {
        const currentIndex = DataProject.findIndex((project) => project.id === id);
        if (currentIndex < DataProject.length - 1) {
            return DataProject[currentIndex + 1].id;
        } else {
            return DataProject[0].id; 
        }
    };

    const getPreviousProjectId = () => {
        const currentIndex = DataProject.findIndex((project) => project.id === id);
        if (currentIndex > 0) {
            return DataProject[currentIndex - 1].id;
        } else {
            return DataProject[DataProject.length - 1].id;
        }
    };

    

    return (
        <main>
            <section className={projectpage}>
                <Link smooth to='/#projects'>
                    <p className={returnBtn}><i class="fa-solid fa-rotate-left"></i>return</p>
                </Link>
                <div className={titleProject}>
                    <h1><i class="fa-solid fa-share"></i>{project.title}</h1>
                    <p>{project.subtext}</p>
                </div>
                <div className='carousel-box'>
                    <Carousel images={project.pictures}/>
                    <div className={skillsBox}>
                        <h3>Compétences</h3>
                        {project.skills.map((skill, index) => (
                            <p key={index} className='skillsbox'><i className="fa-solid fa-check"></i> {skill}</p>
                        ))}
                    </div>  
                </div>
                <div className={textProject}>
                    {project.text.map((paragraph, index) => (
                        <p key={index}> <i className="fa-solid fa-circle-dot"></i> {paragraph}</p>
                    ))}    
                </div>
                <div className={techno}>
                    {project.techno.map((techno, index) => (
                        <span key={index}>{techno}</span>
                    ))}
                </div>
                <div className="project-link">
                        {project.links.map((link, index) => (
                            <Button key={index} text={link.text} icon={link.icon} link={link.link} />
                        ))}
                    </div>
                <div className={linkProject}>
                    <Link to={`/Projet/${getPreviousProjectId()}`}>
                        <i className="fa-solid fa-backward-fast"></i> Projet Précédent
                    </Link>
                    <Link to={`/Projet/${getNextProjectId()}`}>
                        Projet Suivant <i className="fa-solid fa-forward-fast"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ProjectPage;
