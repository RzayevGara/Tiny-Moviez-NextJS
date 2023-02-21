import React from 'react'
import ArrowIcon from '@/assets/images/svg/Left Arrow.svg'
import Image from 'next/image';
import { useSwiper } from 'swiper/react'

function SwiperButtons() {
    const swiper = useSwiper()
  return (
    <div className='slider-buttons'>
        <button onClick={() => swiper.slidePrev()} className='prev-button'>
            <Image  src={ArrowIcon} alt="icon"/>
        </button>
        <button onClick={() => swiper.slideNext()} className='next-button'>
            <Image  src={ArrowIcon} alt="icon"/>
        </button>
    </div>
  )
}

export default SwiperButtons