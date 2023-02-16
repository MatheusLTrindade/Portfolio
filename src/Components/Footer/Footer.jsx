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
                    <a href="https://www.instagram.com/theteu_lt/">
                        <Insta size='3rem'/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511957103895&text=Ol%C3%A1%20Matheus,%20tudo%20bem?%0A%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20perfil%20profissional.">
                        <WhatsApp size='3rem'/>
                    </a>
                    <a href="https://github.com/MatheusLTrindade">
                        <Github size='3rem'/>
                    </a>
                </div>
                <span style={{marginTop: '-3rem',fontSize: '12px', fontStyle: 'italic'}}>{copy} TrindadeWebDeveloper</span>
            </div>
        </div>
    );
}

export default Footer;
