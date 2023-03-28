import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

import Logo from '../Logo/Logo'
import Toggle from '../Toggle/Toggle'
import Language from '../Language/Language'
import Sidebar from '../Sidebar/Sidebar'

import { useTranslation } from "react-i18next";

function Navbar() {

    const {t} = useTranslation();

    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <Logo />
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>{t('Home')}</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>{t('Services')}</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>{t('Experience')}</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>{t('Portfolio')}</li>
                        </Link>
                        {/* <Link spy={true} to='Testimonials' smooth={true}>
                            <li>{t('Testimonials')}</li>
                        </Link> */}
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button">{t('Contact')}</button>
                </Link>
                <Language/>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Navbar