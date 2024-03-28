import React from 'react';
import './home.scss'
import Title from '../title/title';

const Home = () => {
    return (
        <section className='home'>
            <div className='home__float float'></div>
            <div className='home__box contenair'>
                <p>home</p>
                <Title/>
            </div>
        </section>
    );
};

export default Home;