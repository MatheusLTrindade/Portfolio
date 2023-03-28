import React from 'react'
import { motion } from 'framer-motion'

import './Works.css'

import Java from '../../img/logo-java.png'
import Html from '../../img/logo-html5.png'
import JavaScript from '../../img/logo-javascript.png'
import Css from '../../img/logo-css3.svg'
import MySql from '../../img/logo-mysql2.png'

import { useTranslation } from "react-i18next";

function Works() {

    const {t} = useTranslation();

    const transition = {duration : 3.5, type: 'spring'}

    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>{t('Work with all these')}</span>
                <span>{t('Programming Languages')}</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Quod ipsam quibusdam placeat nostrum suscipit
                    <br />
                    iusto vitae qui delectus!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            
                <button className= "button s-button">{t('Hire me')}</button>
            
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={transition}
                className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={Java} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Html} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={JavaScript} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Css} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={MySql} alt="" />
                    </div>
                </motion.div>

                {/* background Circles */}
                <div className="w-backCircle purpleCircle"></div>
                <div className="w-backCircle blueCircle"></div>
            </div>
        </div>
    )
}

export default Works