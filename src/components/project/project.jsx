import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import { Link } from 'react-router-dom';
import './project.scss'
import Title from '../title/title';
import ProjectData from './../../utils/data-base/projectBox.json';
import DataForBlock from './../../utils/data-base/project.json'
import Filter from '../fillter/filter';
import { FilterFunction } from '../../utils/fonction/fonction';
import Block from '../block/block';

const Project = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const float = darkMode ? 'project__float float project__float float__darkmode':'project__float float';
    const contenair = darkMode ? 'project__box contenair project__box contenair__darkmode':'project__box contenair';
    const border = darkMode ? 'border border__darkmode':'border';

    //FILTER CONFIG ==>
    const { activeTags, filteredData, handleTagClick } = FilterFunction(DataForBlock);

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
                    <div className='project-filter'>
                        <div className='filterbar'>
                            {ProjectData[0].filter.map((data, index) => (
                                <Filter key={index} tag={data} onClick={handleTagClick} active={activeTags.includes(data)} />
                            ))}
                        </div>
                        <div className={border}></div>
                    </div>
                    <div className='project-block'>
                        {filteredData.map((data, index) => (
                            <Link key={index} to={`/Projet/${data.id}`}>
                                <Block key={index} title={data.title} image={data.image} description={data.description} subtitle={data.subtitle} number ={data.number}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;



// const [activeTags, setActiveTags] = useState(["Tous"]);
    // const [filteredProjects, setFilteredProjects] = useState(ProjectData);

    // const handleTagClick = tag => {
    //     if (tag === "Tous") {
    //         setFilteredProjects(ProjectData);
    //     } else {
    //         const filtered = ProjectData.filter(project => project.tag.includes(tag));
    //         setFilteredProjects(filtered);
    //     }
    //     setActiveTags([tag]);
    // };