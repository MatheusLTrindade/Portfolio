import React, { useContext } from "react";
import { themeContext } from "../../Context";

import Logotipo from '../../img/logo.png'
import Logotipo2 from '../../img/logo2.png'

import './Logo.css'

function Logo() {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div className="n-logo">
            <div className="n-logoImg">
                <img src={lightMode? Logotipo2 : Logotipo } alt="" />
            </div>
            <hr style={{height: '5vh', borderColor: 'var(--gray)'}}/>
            <div className="n-logoText">
                <span>TRINDADE</span>
                <span 
                    style={{
                        color: lightMode? 'var(--eggshell)' : '',
                        background: lightMode? 'var(--black)' : ''
                    }}
                >WEB DEVELOPER</span>
            </div>
        </div>
    )
}

export default Logo