import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import './Portfolio.css'
import 'swiper/css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import UnderConstrution from '../../img/underConstrution.jpg'
import Dashboard from '../../img/Dashboard.png'
import Todolist from '../../img/Todolist.png'
import BulmaCurriculum from '../../img/BulmaCurriculum.png'

import { useTranslation } from "react-i18next";

function Portfolio() {

    const {t} = useTranslation();

    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span>{t('Recent Projects')}</span>
            <span>{t('Portfolio')}</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <a href="https://matheusltrindade.github.io/Projeto-ProgramacaoWeb/">
                        <img src={Dashboard} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://todolist-trindade.netlify.app">
                        <img src={Todolist} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://matheusltrindade.github.io/Bulma_Curriculum/">
                        <img src={BulmaCurriculum} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={UnderConstrution} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={UnderConstrution} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={UnderConstrution} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio