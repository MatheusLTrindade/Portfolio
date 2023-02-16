import React, { useContext } from "react";
import { themeContext } from "../../Context";

import './Language.css'

import LanguageIcon from '@iconscout/react-unicons/icons/uil-globe'

function Language(){

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return(
        <div className="language">
            <LanguageIcon className="drop-btn"
                style={{
                    background: lightMode? 'var(--eggshell)' : ''
                }}
            />
            <div className="drop-menu">
                <span style={{background: 'var(--verdigris)'}}>English</span>
                <span>Portuguese</span>
                <span>Spanish</span>
            </div>
        </div>
    )
}

export default Language