import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";

function Contact() {
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
                console.log(result.text);
                setDone(true);
                setUser({
                    name: '',
                    email: '',
                    message: ''
                });
                setStatus({
                    type: 'success',
                    message: 'Thanks for contacting me!'
                });
            }, (error) => {
                console.log(error.text);
                setStatus({
                    type: 'error',
                    message: 'We were unable to forward your message, please try again!'
                });
            });
    };

    return (
        <div className="contact-form" id='Contact'>
            {/* left side */}
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" value={user.name}/>
                    <input type="email" name="user_email" className="user" placeholder="Email" value={user.email}/>
                    <textarea name="message" className="user textarea" placeholder="Message" value={user.message}/>
                    <input type="submit" value="Send" className="button" />
                
                    {status.type === 'error' ? <span style={{color: "#FF0000"}}>{status.message}</span> : <span>{done && status.message}</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
