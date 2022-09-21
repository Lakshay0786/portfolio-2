
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css'

import { Autoplay, Pagination, Navigation } from "swiper";
import dataSlider from './dataSlider'

function SkillSwiper() {
    return (
        <div className="swiper-body">
            <h1 className="swiper-h1">Some Things I've Built. </h1>
            <p>I'm a great believer in learning by building, so I build stuff from scratch, get stuck, google & repeat because everything is figureoutable.</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {dataSlider.map((obj) => {
                    return (
                        <SwiperSlide>

                            <h2>{obj.title}</h2>

                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )
}

export default SkillSwiper;