import React, { useState, useContext } from 'react'
import { Link } from 'react-scroll'
import { themeContext } from "../../Context";

import './Sidebar.css'

import EllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v'
import Closebar from '@iconscout/react-unicons/icons/uil-times-square'

import { useTranslation } from "react-i18next";
import Logo from '../Logo/Logo';

function Sidebar() {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    const {t} = useTranslation();

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='sidebar'>
            <div className={sidebar ? 's-btn active' : 's-btn'}>
                <EllipsisV className='btn' onClick={showSidebar}/>
            </div>
            <div className={sidebar ? 's-menu active' : 's-menu'}>
                <div className="s-btn-close" onClick={showSidebar}>
                    <Closebar />
                </div>
                <Logo />
                <ul 
                    style={{listStyleType: 'none'}} 
                    className='s-menu-items'
                >
                    <Link spy={true} to='Navbar' smooth={true}>
                        <li onClick={showSidebar}>{t('Home')}</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li onClick={showSidebar}>{t('Services')}</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li onClick={showSidebar}>{t('Experience')}</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li onClick={showSidebar}>{t('Portfolio')}</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                        <li onClick={showSidebar}>{t('Testimonials')}</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                        <button 
                            className="button s-button"
                            style={{background: lightMode? 'var(--black)' : ''}}
                            onClick={showSidebar}
                        >{t('Contact')}</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar