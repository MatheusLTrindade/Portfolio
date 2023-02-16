import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

import Logo from '../Logo/Logo'
import Toggle from '../Toggle/Toggle'
import Language from '../Language/Language'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <Logo />
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button">Contact</button>
                </Link>
                <Language/>
            </div>
        </div>
    )
}

export default Navbar