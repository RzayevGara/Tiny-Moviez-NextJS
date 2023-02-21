// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, {useState} from "react"
import Rating from '@mui/material/Rating';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from 'next/image';


function CategorySwiper({data, title}) {
  return (
    <div className='category-swiper'>
        <h2 className="category-swiper_title">{title}</h2>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
        >
          {data?.results?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="swiper-slider-container">
                  <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} width="2048" height="1152" alt="logo" priority loading="eager"/>
                  <div className="title-name">
                    <p >{item.title || item.name}</p>
                    <Rating name="read-only" defaultValue={5*(item.vote_average/10)} precision={0.1}  readOnly/>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}

export default CategorySwiper