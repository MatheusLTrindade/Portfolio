import React from "react";

import "./Footer.css";

import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import WhatsApp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {

    const copy = '\u00a9';

    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>matheus.lopes.trindade@hotmail.com</span>
                <div className="f-icons">
                    <Insta size='3rem'/>
                    <WhatsApp size='3rem'/>
                    <Github size='3rem'/>
                </div>
                <span style={{marginTop: '-3rem',fontSize: '12px', fontStyle: 'italic'}}>{copy} TrindadeWebDeveloper</span>
            </div>
        </div>
    );
}

export default Footer;
