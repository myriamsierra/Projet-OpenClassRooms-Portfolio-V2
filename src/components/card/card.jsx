import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './card.scss'

const Card = ({ titleFront,icon,textBack }) => {

    //DARKMODE THEME =>
    const { darkMode } = useTheme();
    const cardFront = darkMode ? "card-front card-front__darkmode":"card-front";
    const cardBack = darkMode ? "card-back card-back__darkmode":"card-back";
    const title = darkMode ? "front-title front-title__darkmode":"front-title";

    return (
        <div className='card'>
            <div className='card__box'>
                <div className={cardFront}>
                    <p className={title}>{titleFront}</p>
                    <i className={icon}></i>
                </div>
                <div className={cardBack}>
                    {textBack.map((skill, index) => (
                        <p key={index} className='card-skill'><i class="fa-solid fa-check"></i>{skill}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
