import React from 'react'
import styles from './Slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sl1 from '../../assets/slide_1.jpg'
import sl2 from '../../assets/slide_2.jpg'
import sl3 from '../../assets/slide_3.jpg'

const Slider: React.FC = () => {

    const sldArr = [sl1, sl2, sl3];
    return (
        <Swiper
            className={styles.slider}
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
        >
            {sldArr.map((sld, i) =>
                <SwiperSlide key={i} className={styles.slide}>
                    <img src={sld} alt="Image is N.A" className={styles.slideImage} />
                </SwiperSlide>
            )}


        </Swiper>
    )
}

export default Slider