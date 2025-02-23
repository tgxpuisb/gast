"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import Image from "next/image"

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
          <Image src={'/images/1.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <Image src={'/images/2.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <Image src={'/images/3.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <Image src={'/images/4.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <Image src={'/images/5.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ height }}>
          <Image src={'/images/6.png'} height={height} width={window.screen.width} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default IndexCarousel