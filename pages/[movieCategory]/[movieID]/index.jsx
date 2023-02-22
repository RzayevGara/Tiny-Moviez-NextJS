import React from 'react'
import { getMovieDetail, getMovieCredits, getMovieSimilar} from "@/pages/api/moviesFetch";
import MovieDetail from '@/modules/MovieDetail/MovieDetail'

function index({data, dataCredits, dataSimilar}) {
  console.log(data, dataCredits)
  return (
    <MovieDetail data={data} dataCredits={dataCredits} dataSimilar={dataSimilar}/>
  )
}

export default index


export async function getServerSideProps(context) {
  const categoryQuery = context.params.movieCategory
  const id = context.params.movieID
  try{
    const [data, dataCredits, dataSimilar] = await Promise.all([
      getMovieDetail(categoryQuery, id), 
      getMovieCredits(categoryQuery, id),
      getMovieSimilar(categoryQuery, id),
    ]);
    return {props: {data, dataCredits, dataSimilar}}
  }
  catch(error){
    return {notFound: true}
  }
}