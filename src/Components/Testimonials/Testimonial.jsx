import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import 'swiper/css'
import 'swiper/css/pagination'
import "./Testimonial.css";

import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"

import { useTranslation } from "react-i18next";

function Testimonial() {

    const {t} = useTranslation();

    const clients = [
        {
            img: profilePic1,
            review: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo modi, est ab voluptas voluptatem, sint esse nulla quae, amet a magnam doloribus atque labore. Laudantium maiores ducimus quod ab?",
        },
        {
            img: profilePic2,
            review: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo modi, est ab voluptas voluptatem, sint esse nulla quae, amet a magnam doloribus atque labore. Laudantium maiores ducimus quod ab?",
        },
        {
            img: profilePic3,
            review: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo modi, est ab voluptas voluptatem, sint esse nulla quae, amet a magnam doloribus atque labore. Laudantium maiores ducimus quod ab?",
        },
        {
            img: profilePic4,
            review: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo modi, est ab voluptas voluptatem, sint esse nulla quae, amet a magnam doloribus atque labore. Laudantium maiores ducimus quod ab?",
        },
    ];

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>{t('Clients always get ')}</span>
                <span>{t('Exceptional Work ')}</span>
                <span>{t('from me...')}</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ backgorund: "skyblue" }}></div>
            </div>

            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                {clients.map((client, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Testimonial;
