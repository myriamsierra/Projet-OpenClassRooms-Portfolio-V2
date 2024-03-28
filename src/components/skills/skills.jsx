import React from 'react';
import './skills.scss'
import Title from '../title/title';

const Skills = () => {
    return (
        <section className='skills'>
            <div className='skills__float float'></div>
            <div className='skills__box contenair'>
                <p>skills</p>
                <Title/>
            </div>
        </section>
    );
};

export default Skills;