import React, { useContext } from 'react'

import './Toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'

function Toggle() {

    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

    return (
        <div className="toggle" onClick={handleClick}>
            <Sun />
            <Moon />
            <div className="t-button"
                style={lightMode? {left: '2px'} : {right: '2px'}}
            >
            </div>
        </div>
    )
}

export default Toggle