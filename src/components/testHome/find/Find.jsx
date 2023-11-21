import React from "react";
import styles from './Find.module.css'
import swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import Card from "../find/Card";
import mingyu_1 from '../../../images/mingyu-1.jpg'
import mingyu_2 from '../../../images/mingyu-2.jpg'
import mingyu_3 from '../../../images/mingyu-3.jpg'

const Find = () => {
    return (
        <div className={styles.find} >
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}></div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation={
                    {
                        observer: true,
                        observeParents: true,
                        parallax: true,
                    }
                }
                breakpoints={{
                    340: {
                        width: 200,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4
                    },
                    1040: {
                        width: 1040,
                        slidesPerView: 5
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card image={mingyu_1} make='Mingyu-1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_2} make='Mingyu-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_3} make='Mingyu-3' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_1} make='Mingyu-1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_2} make='Mingyu-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_3} make='Mingyu-3' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_3} make='Mingyu-3' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_1} make='Mingyu-1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_2} make='Mingyu-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={mingyu_3} make='Mingyu-3' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Find