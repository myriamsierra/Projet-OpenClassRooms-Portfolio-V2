import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './block.scss'

const Block = ({ image, title,subtitle, description,number}) => {
   
    //darkmode theme
    const { darkMode} = useTheme();
    const numberBox = darkMode ? 'block-number block-number__darkmode':'block-number';
    const block = darkMode ? 'block block__darkmode':'block';
    const blocktext = darkMode ? 'subtitle-project subtitle-project__darkmode':'subtitle-project';
    const blockImg = darkMode ? 'block-image block-image__darkmode':'block-image';
    const overlay = darkMode ? 'overlay overlay__darkmode':'overlay';
    const btn = darkMode ? 'overlay-btn overlay-btn__darkmode':'overlay-btn';

    return (
        <div className={block}>
            <div className={numberBox}>
                <p>#{number}</p>
            </div>
            <div className='block-text'>
                <div className='block-title'>
                    <p className='title-project'>{title}</p>
                    <p className={blocktext}>{subtitle}</p>
                </div>
                <div className='block-description'>
                    <p>{description}</p>
                </div>
            </div>
            <div className={blockImg}>
                <img src={image} alt="projet"></img>
            </div>
            <div className={overlay}></div>
            <button className={btn}>en savoir plus <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default Block;