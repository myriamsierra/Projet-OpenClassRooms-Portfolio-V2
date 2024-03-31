import React from 'react';
import './error-page.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <main>
            <section className='error-page'>
                <div className='error-page__box contenair'>
                    <img className='illustration' src="https://raw.githubusercontent.com/myriamsierra/Database-Pour-Portfolio/main/illustration/error-404.webp"alt='illustration erreur404'></img>
                    <div className='error-text'> 
                        <h1>Oups !</h1>
                        <p>Nous n'avons pas trouvé votre page</p>
                        <Link smooth to='/#projects' className="error-backlink"> <i class="fa-solid fa-rotate-left"></i>retour</Link>
                    </div>
                </div>
            </section>
    </main>
    );
};

export default ErrorPage

