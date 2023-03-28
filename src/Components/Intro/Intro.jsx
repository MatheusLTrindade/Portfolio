import React from "react";
import Typewriter from "typewriter-effect";

import './Intro.css'

import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/eu3.png'

import {} from "../../utils/i18n";
import { useTranslation } from "react-i18next";

function Intro() {

    const {t} = useTranslation();

    return (
        <div className="intro">
            {/* left side */}
            <div className="i-left">
                <div className="i-name">
                    <span>{t('Hy! I Am')}</span>
                    <span>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'Typewriter__wrapper',
                                cursorClassName: 'Typewriter__cursor',
                                delay: 40,
                                strings: [
                                    'Matheus Trindade',
                                    t('Developer'),
                                    'Designer',
                                    'UI/UX'
                                ]
                            }}
                        />
                    </span>
                    <span>{t('Frontend Developer with high level of experience in web designing and development, producing quality work')}</span>
                </div>
                <a href="https://wa.me/5511957103895/">
                    <button className="button i-button">{t('Hire me')}</button>
                </a>
                <div className="i-icons">
                    <a href="https://github.com/MatheusLTrindade">
                        <img src={GitHub} alt="" />
                    </a>
                    <div className="blur blur-icons" style={{left: '-0.8rem'}}></div>

                    <a href="https://www.linkedin.com/in/matheus-trindade-883025247/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <div className="blur blur-icons" style={{left: '3.5rem'}}></div>
                    
                    <a href="https://www.instagram.com/theteu_lt/">
                        <img src={Instagram} alt="" />
                    </a>
                    <div className="blur blur-icons" style={{left: '7.9rem'}}></div>
                </div>
            </div>

            {/* right side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Me} alt="" />
                {/* Blur divs */}
                <div className="blur" style={{background: "#1460637b"}}></div>
                <div className="blur" 
                    style={{
                        background: '#0000009b',
                        filter: 'blur(25px)',
                        top: '22rem',
                        width: '25rem',
                        height: '3rem',
                        left: '1rem'
                    }}
                >
                </div>
            </div>
        </div>
    );
}

export default Intro;
