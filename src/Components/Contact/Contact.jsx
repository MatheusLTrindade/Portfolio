import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";

function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b1t62kg', 'template_6fveaql', form.current, 'eyjHvW0tdRMlCNTC2')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form">
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
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user textarea" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me!"}</span>
                </form>
            </div>
        </div>
    );
}

export default Contact;
