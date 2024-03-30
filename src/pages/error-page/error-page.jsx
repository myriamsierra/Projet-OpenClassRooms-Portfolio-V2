import React from 'react';
import './error-page.scss'

const ErrorPage = () => {
    return (
        <main>
        <section className='error-page'>
        <img className='error-page__illustration png' src="https://raw.githubusercontent.com/myriamsierra/Database-Pour-Portfolio/main/illustration/error-404.webp"alt='illustration erreur404'></img>
            <div className='error-page__box contenair'>
                <p>error</p> 
            </div>
        </section>
    </main>
    );
};

export default ErrorPage

