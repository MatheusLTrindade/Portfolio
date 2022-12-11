import React from "react";
import {motion} from 'framer-motion'

import "./Services.css";

import Resume from "./resume.pdf"
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"


function Services() {

    const transition = {duration : 1, type: 'spring'}

    return (
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Quod ipsam quibusdam placeat nostrum suscipit natus
                    <br />
                    aspernatur porro, iusto vitae qui delectus! Dolorum qui
                    <br />
                    tempore fuga corporis quo maxime odit dolore?
                </span>
                <a href={Resume} download>
                    <button className= "button s-button">Download CV</button>
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
                        heading = {'Design'}
                        detail = {'Figma, Canvas, Sketch, Photoshop, Adobe, Adobe XD'}
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
                        heading = {'Developer'}
                        detail = {'HTML, CSS, JavaScript, React, Angular, Vue, Dooker, Sass, Bootstrap'}
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
                        detail = {'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    );
}

export default Services;
