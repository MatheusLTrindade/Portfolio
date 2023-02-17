import React, { useContext } from "react";
import { themeContext } from "../../Context";

import './Language.css'

import LanguageIcon from '@iconscout/react-unicons/icons/uil-globe'

import {} from "../../utils/i18n";
import { useTranslation } from "react-i18next";

function Language(){

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;
    
    const {t, i18n:{changeLanguage}} = useTranslation();

    return(
        <div className="language">
            <LanguageIcon className="drop-btn"
                style={{
                    background: lightMode? 'var(--eggshell)' : ''
                }}
            />
            <div className="drop-menu">
                <span 
                    onClick={()=> changeLanguage('en')}>
                        {t('English')}
                </span>
                <span
                    onClick={()=> changeLanguage('pt')}>
                        {t('Portuguese')}
                </span>
                <span
                    onClick={()=> changeLanguage('es')}>
                        {t('Spanish')}
                </span>
            </div>
        </div>
    )
}

export default Language