import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './upload.scss';
import CV from './../../assets/SIERRA-Myriam-CV.pdf'



const Upload = () => {

     //DARKMODE CONFIG ==>
     const { darkMode} = useTheme();
     const box = darkMode ? 'upload__box upload__box__darkmode':'upload__box';
     const button = darkMode ? 'button button__darkmode':'button';

    return (
        <section className='upload'>
            <div className={box}>
            <img className='upload__illustration' src="https://raw.githubusercontent.com/myriamsierra/Database-Pour-Portfolio/main/illustration/arrows.webp"alt='illustration fleche'></img>
                <a className={button} href={CV} download="SIERRA-myriam-CV">
                    <i className="fa-solid fa-upload"></i>Télécharger mon CV
                </a>
            </div>
        </section>
    );
};

export default Upload;

