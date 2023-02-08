"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategoryList } from "@/app/api/moviesFetch";
import React, {useState} from "react"
import { useSearchParams } from "next/navigation";
import Rating from '@mui/material/Rating';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './categorySwiper.sass'

// import required modules
import { Pagination } from "swiper";
import {useQuery} from 'react-query'
import Image from 'next/image';


function CategorySwiper({genre, title}) {
    const [data, setData] = useState([])
    const searchParams = useSearchParams();
  
    const {isLoading, error} = useQuery(["fetchCategory", searchParams.get("category"), genre], () =>{
        let category = searchParams.get("category")
        console.log(category)
        if (category){
          getCategoryList(category, genre, 1)
          .then(res=>setData(res))
        }
    }
    )

    console.log(data)
    if (isLoading) return "Yükleniyor...";
  
    if (error) return "Hata meydana geldi: " + error.message

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
          {data?.results?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-slider-container">
                  <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} width="2048" height="1152" alt="logo" priority/>
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