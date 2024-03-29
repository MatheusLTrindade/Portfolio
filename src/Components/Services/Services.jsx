import React from "react";
import {motion} from 'framer-motion'

import "./Services.css";

import Resume from "./resume.pdf"
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"

import { useTranslation } from "react-i18next";

function Services() {

    const {t} = useTranslation();

    const transition = {duration : 1, type: 'spring'}

    return (
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span>{t('My Awesome')}</span>
                <span>{t('Services')}</span>
                <span
                    style={{maxWidth: '360px'}}
                    >
                    {t('Here are some of the technologies I work with.')}
                    <br/>
                    {t('If you prefer, you can download my resume from the button below.')}
                </span>
                <a href={Resume} download>
                    <button className= "button s-button">{t('Download')}</button>
                </a>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                {/* first card */}
                <motion.div 
                    initial={{left: '25rem'}}
                    whileInView={{left: '14rem'}}
                    transition={transition}
                    style={{left: '14rem'}}
                >
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {t('Designer')}
                        detail = {'Canvas, Sketch, Photoshop'}
                    />
                </motion.div>

                {/* second card */}
                <motion.div 
                    initial={{left: '-11rem', top: '12rem'}}
                    whileInView={{left: '-4rem'}}
                    transition={transition}
                    style={{top: '12rem', left: '-4rem'}}
                >
                    <Card 
                        emoji = {Glasses}
                        heading = {t('Developer')}
                        detail = {'Java, HTML, CSS, JavaScript, React, Node, MySQL, Sass, Bootstrap, Bulma'}
                    />
                </motion.div>

                {/* third card */}
                <motion.div 
                    initial={{left: '25rem', top: '19rem'}}
                    whileInView={{left: '12rem'}}
                    transition={transition}
                    style={{top: '19rem', left: '12rem'}}
                >
                    <Card 
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {'Figma, Adobe XD'}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    );
}

export default Services;
