import React from 'react'
import { motion } from 'framer-motion'

import './Works.css'

import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

import { useTranslation } from "react-i18next";

function Works() {

    const {t} = useTranslation();

    const transition = {duration : 3.5, type: 'spring'}

    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>{t('Works for All these')}</span>
                <span>{t('Brands & Clients')}</span>
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
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
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