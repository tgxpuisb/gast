"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay';

import img1 from 'src/assets/images/1.png'
import img2 from 'src/assets/images/2.png'
import img3 from 'src/assets/images/3.png'
import img4 from 'src/assets/images/4.png'
import img5 from 'src/assets/images/5.png'
import img6 from 'src/assets/images/6.png'

function IndexCarousel() {

  const height = window.screen.width / 2

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img1} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img2} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img3} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img4} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img5} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <img src={img6} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default IndexCarousel