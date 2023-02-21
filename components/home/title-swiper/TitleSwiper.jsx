import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';

import SwiperButtons from './SwiperButtons'

function TitleSwiper({data}) {

  return (
    <div className="title-swiper">
        <Swiper pagination={true} modules={[Pagination, Autoplay]} loop={true} autoplay={{delay: 5000}}>
          {data?.results?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div>
                  <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} width="2048" height="1152" alt="logo" priority loading="eager"/>
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
