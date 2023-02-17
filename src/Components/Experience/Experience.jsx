import React, { useContext } from "react";
import { themeContext } from "../../Context";

import './Experience.css'

import { useTranslation } from "react-i18next";

function Experience() {

    const {t} = useTranslation();

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >1+</div>
                <span>{t('years')}</span>
                <span>{t('Experience')}</span>
            </div>
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >10+</div>
                <span>{t('completed')}</span>
                <span>{t('Projects')}</span>
            </div>
            <div className="achievement">
                <div className="circle" 
                    style={{
                        backgroundImage: lightMode? 'linear-gradient(to bottom, #EED2FF 0%, #00ADB5 100%)' : ''
                    }}
                >5+</div>
                <span>{t('companies')}</span>
                <span>{t('Work')}</span>
            </div>
        </div>
    )
}

export default Experience