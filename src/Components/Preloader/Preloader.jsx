import React, { useContext } from "react";
import { themeContext } from "../../Context";

import './Preloader.css';

import Logotipo from '../../img/logo.png'
import Logotipo2 from '../../img/logo2.png'

const Preloader = () => {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div className="preloader">
            <div 
                className="spinner" 
                style={{
                    borderColor: lightMode ? '#ccc' : '#333', 
                    borderTop: '1px solid var(--verdigris)'
                }}
            />
            <div className="logoImg">
                <img src={lightMode ? Logotipo2 : Logotipo } alt="" />
            </div>
        </div>
    );
};

export default Preloader;