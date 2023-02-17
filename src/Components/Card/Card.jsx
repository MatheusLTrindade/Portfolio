import React from 'react'

import './Card.css'

import { useTranslation } from "react-i18next";

function Card({emoji, heading, detail}) {

  const {t} = useTranslation();

  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">{t('LEARN MORE')}</button>
    </div>
  )
}

export default Card