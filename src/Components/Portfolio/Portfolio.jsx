import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import './Portfolio.css'
import 'swiper/css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'

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
                    <iframe 
                        src="https://embed.lottiefiles.com/animation/92461"
                        style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe 
                        src="https://embed.lottiefiles.com/animation/92461"
                        style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe 
                        src="https://embed.lottiefiles.com/animation/92461"
                        style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe 
                        src="https://embed.lottiefiles.com/animation/92461"
                        style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe 
                        src="https://embed.lottiefiles.com/animation/92461"
                        style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    ></iframe>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio