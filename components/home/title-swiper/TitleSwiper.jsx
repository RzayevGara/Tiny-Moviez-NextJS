"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { getCategoryList } from "@/app/api/moviesFetch";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import React, {useState} from "react"

import "./titleSwiper.sass";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";

import {useQuery} from 'react-query'

import SwiperButtons from './SwiperButtons'

function TitleSwiper() {
  const [popular, setPopular] = useState([])
  const searchParams = useSearchParams();

  const {isLoading, error} = useQuery(["fetchMovies", searchParams.get("category")], () =>{
      let category = searchParams.get("category")
      if (category){
        getCategoryList(category, "top_rated", 1)
        .then(res=>setPopular(res))
      }
  }
  )
  if (isLoading) return "Yükleniyor...";

  if (error) return "Hata meydana geldi: " + error.message

  return (
    <div className="title-swiper">
        <Swiper pagination={true} modules={[Pagination, Autoplay]} loop={true} autoplay={{delay: 5000}}>
          {popular?.results?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} width="2048" height="1152" alt="logo" priority/>
                  <p className="movie-title">{item.title || item.name}</p>
                </div>

              </SwiperSlide>
            )
          })}
          <SwiperButtons/>
        </Swiper>
    </div>
  );
}

export default TitleSwiper;
