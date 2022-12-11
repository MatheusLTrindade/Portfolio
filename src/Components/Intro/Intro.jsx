import React from "react";

import './Intro.css'

import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/eu3.png'

function Intro() {
    return (
        <div className="intro">
            {/* left side */}
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Matheus Trindade</span>
                    <span>
                        Frontend Developer with high 
                        level of experience in web designing
                        and development, producing quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
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
