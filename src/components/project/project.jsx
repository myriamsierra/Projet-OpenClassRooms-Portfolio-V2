import React from 'react';
import './project.scss'
import Title from '../title/title';

const Project = () => {
    return (
        <section className='project'>
            <div className='project__float float'></div>
            <div className='project__box contenair'>
                <p>project</p> 
                <Title/>
            </div>
        </section>
    );
};

export default Project;