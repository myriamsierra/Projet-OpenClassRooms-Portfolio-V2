import React from 'react';
import './about.scss';
import Title from '../title/title';

const About = () => {
    return (
        <section className='about'>
            <div className='about__float float'></div>
            <div className='about__box contenair'>
                <p>about</p>
                <Title/>
            </div>
        </section>
    );
};

export default About;