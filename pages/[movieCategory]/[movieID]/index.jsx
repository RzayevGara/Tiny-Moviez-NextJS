import React from 'react'
import { getMovieDetail, getMovieCredits, getMovieSimilar} from "@/pages/api/moviesFetch";
import MovieDetail from '@/modules/MovieDetail/MovieDetail'
import Head from 'next/head'

function index({data, dataCredits, dataSimilar}) {
  return (
    <>
      <Head>
        <title>Tiny Moviez - {data.title || data.name}</title>
      </Head>
      <MovieDetail data={data} dataCredits={dataCredits} dataSimilar={dataSimilar}/>
    </>
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