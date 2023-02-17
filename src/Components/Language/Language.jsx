import React, { useContext, useState } from "react";
import { themeContext } from "../../Context";

import './Language.css'

import LanguageIcon from '@iconscout/react-unicons/icons/uil-globe'

import '../../utils/i18n'
import { useTranslation } from "react-i18next";

function Language(){

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const {t, i18n} = useTranslation();

    const changeLanguage = value =>{
        i18n.changeLanguage(value)
        .then( () => {
            setCurrentLanguage(value);
        })
        .catch( (err) =>{
            console.log(err);
        })
    }

    return(
        <div className="language">
            <LanguageIcon className="drop-btn"
                style={{
                    background: lightMode ? 'var(--eggshell)' : 'transparent'
                }}
            />
            <div className="drop-menu">
                <span 
                    onClick={()=> changeLanguage('en')}
                    style={{
                        background: currentLanguage === 'en' ? 'var(--verdigris)' : ''
                    }}
                    >
                        {t('English')}
                </span>
                <span
                    onClick={()=> changeLanguage('pt')}
                    style={{
                        background: currentLanguage === 'pt' ? 'var(--verdigris)' : ''
                    }}
                    >
                        {t('Portuguese')}
                </span>
                <span
                    onClick={()=> changeLanguage('es')}
                    style={{
                        background: currentLanguage === 'es' ? 'var(--verdigris)' : ''
                    }}
                    >
                        {t('Spanish')}
                </span>
            </div>
        </div>
    )
}

export default Language