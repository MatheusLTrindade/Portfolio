import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";

import { useTranslation } from "react-i18next";

function Contact() {

    const {t} = useTranslation();

    const form = useRef();

    const [user, setUser] = useState(false);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b1t62kg', 'template_6fveaql', form.current, 'eyjHvW0tdRMlCNTC2')
            .then((result) => {
                setDone(true);
                setUser({
                    name: '',
                    email: '',
                    message: ''
                });
                setUser({
                    name: null,
                    email: null,
                    message: null
                });
                setStatus({
                    type: 'success',
                    message: t('Thanks for contacting me!')
                });
            }, (error) => {
                console.log(error.text);
                setStatus({
                    type: 'error',
                    message: t('Sorry, your message could not be forwarded, please try again!')
                });
            });
    };

    return (
        <div className="contact-form" id='Contact'>
            {/* left side */}
            <div className="w-left">
                <div className="awesome">
                    <span>{t('Get in touch')}</span>
                    <span>{t('Contact me')}</span>
                    <span
                        style={{maxWidth: '280px'}}
                        >
                            {t('If you prefer, you can contact me through the social networks below.')}
                    </span>
                    <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder={t("Name")} value={user.name}/>
                    <input type="email" name="user_email" className="user" placeholder="Email" value={user.email}/>
                    <textarea name="message" className="user textarea" placeholder={t("Message")} value={user.message}/>
                    <input type="submit" value={t("Send")} className="button" />
                
                    {status.type === 'error' ? <span style={{color: "#FF0000"}}>{status.message}</span> : <span>{done && status.message}</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
