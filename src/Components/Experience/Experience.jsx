import React, { useContext } from "react";
import { themeContext } from "../../Context";

import './Experience.css'

function Experience() {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >8+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >20+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >5+</div>
                <span>companies</span>
                <span>Work</span>
            </div>
        </div>
    )
}

export default Experience