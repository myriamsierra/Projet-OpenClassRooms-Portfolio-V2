import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './about.scss';
import AboutData from './../../utils/data-base/about.json';
import Title from '../title/title';
import Button from '../button/button';

const About = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const float = darkMode ? 'about__float float about__float float__darkmode':'about__float float';
    const contenair = darkMode ? 'about__box contenair about__box contenair__darkmode':'about__box contenair';
    const border = darkMode ? 'border border__darkmode':'border';

    return (
        <section className='about' id="about">
            <img className='about__illustration png' src={AboutData[0].image}alt='illustration livre'></img>
            <div className={float}></div>
            <div className={contenair}>
                <div className='about__content'>
                    <div className="about-title"> 
                        <Title symbols1={AboutData[0].symbol} title={AboutData[0].title}/>
                        <div className={border}></div>
                    </div>
                    <div className='about-text'>
                        {AboutData[0].text.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}   
                    </div>
                    <div className='about-button'>
                        {AboutData[0].links.map((link, index) => (
                            <Button key={index} text={link.text} icon={link.icon} link={link.link} />
                        ))}
                    </div>
                </div>     
            </div>
        </section>
    );
};

export default About;