import React from 'react';
import './contact.scss'
import Title from '../title/title';

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__float float'></div>
            <div className='contact__box contenair'>
                <p>contact</p>
                <Title/>
            </div>
        </section>
    );
};

export default Contact;