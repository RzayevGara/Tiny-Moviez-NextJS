import Image from 'next/image'
import Rating from '@mui/material/Rating';
import CategorySwiper from "@/components/home/category-swiper/CategorySwiper";

function MovieDetail({data, dataCredits, dataSimilar}) {
    console.log(dataSimilar?.results)
    return (
      <section className="main-content movie-detail">
        <div className="movie-info">
            <div className="movie-poster">
                <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} width="600"  height="900"  priority loading="eager" alt="poster" className="desktop-poster"/>
                <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} width="2048" height="1152"  priority loading="eager" alt="poster" className="mobile-poster"/>
            </div>
            <div className="movie-text">
                <h2>{data.title || data.name}</h2>
                <p className="movie-tagname">{data.tagline}</p>
                <Rating name="read-only" defaultValue={5*(data.vote_average/10)} precision={0.1}  readOnly/>
                <div className="movie-overview">
                    <p>Overview</p>
                    <p>{data.overview}</p>
                </div>
                <div className="movie-cast">
                    <p>Top Cast</p>
                    <ul>
                        {
                            dataCredits?.cast?.map((item, index)=>{
                                if(index<6){
                                    return (
                                        <li key={item.id}>
                                            <Image src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}  width="100"  height="150"  priority loading="eager" alt="poster"/>
                                            <p>{item.name}</p>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <CategorySwiper data={dataSimilar?.results} title="Similar on TinyMoviez" />
      </section>
    )
  }
  
  export default MovieDetail