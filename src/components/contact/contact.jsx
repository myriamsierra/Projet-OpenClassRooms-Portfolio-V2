import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './contact.scss'
import Title from '../title/title';
import ContactData from './../../utils/data-base/contact.json';

const Contact = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const float = darkMode ? 'contact__float float contact__float float__darkmode':'contact__float float';
    const contenair = darkMode ? 'contact__box contenair contact__box contenair__darkmode':'contact__box contenair';
    const border = darkMode ? 'border border__darkmode':'border';
    const button = darkMode ? 'button button__darkmode':'button';

    return (
        <section className='contact' id="contact">
            <img className='contact__illustration png' src={ContactData[0].image}alt='illustration telephone'></img>
            <div className={float}></div>
            <div className={contenair}>
                <div className='contact__content'>
                    <div className='contact-title'>
                        <Title symbols1={ContactData[0].symbol1} symbols2={ContactData[0].symbol2} title={ContactData[0].title}/>
                        <div className={border}></div>
                    </div>
                    <form className="contact-form" method="post" name="contact" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="name-box">
                            <input className="input" type="text" name="name" placeholder={ContactData[0].input1} id="name"/>
                            <input className="input" type="email" name="email" placeholder={ContactData[0].input2} id="email"/>
                        </div>  
                        <textarea className="textaera" name="message" placeholder={ContactData[0].input3}id="message"/> 
                        <button className={button} type="submit"><i className={ContactData[0].icon}> </i>{ContactData[0].submit}</button>
                    </form>
                </div>  
            </div>
        </section>
    );
};

export default Contact;

              