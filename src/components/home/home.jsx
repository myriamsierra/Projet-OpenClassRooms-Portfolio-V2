import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import './home.scss'
import Title from '../title/title';
import HomeData from './../../utils/data-base/home.json'
import Button from '../button/button';

const Home = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const float = darkMode ? 'home__float float home__float float__darkmode':'home__float float';
    const contenair = darkMode ? 'home__box contenair home__box contenair__darkmode':'home__box contenair';
    const border = darkMode ? 'border border__darkmode':'border';
      
    return (
        <section className='home' id="home">
            <img className='home__illustration png' src={HomeData[0].image}alt='illustration ordinateur'></img>
            <div className={float}></div>
            <div className={contenair}>
                <div className='home__content'>
                    <div className="home-title"> 
                        <Title symbols1={HomeData[0].symbol1} symbols2={HomeData[0].symbol2} title={HomeData[0].title}/>
                        <p>{HomeData[0].subtitle}</p>
                        <div className={border}></div>
                    </div>
                    <div className='home-text'>
                        {HomeData[0].text.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}   
                    </div>
                    <div className='home-button'>
                        <Link smooth to='#contact'> 
                            <Button text={HomeData[0].links[0].text} icon={HomeData[0].links[0].icon} />
                        </Link>
                        <Button text={HomeData[0].links[1].text} icon={HomeData[0].links[1].icon} link={HomeData[0].links[1].link} />                 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;


