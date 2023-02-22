import MoviesList from '@/modules/MoviesList/MoviesList'
import { getCategoryList } from "@/pages/api/moviesFetch";
import Head from 'next/head'

function Page({data, pageParams, pageQuery, categoryQuery}) {
  const genre = pageParams
  
  const str = genre.replace('_',' ')
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
return (
    <>
      <Head>
        <title>Tiny Moviez - {str2}</title>
      </Head>
      <MoviesList data={data} pageParams={pageParams} pageQuery={pageQuery} categoryQuery={categoryQuery} str2={str2}/>
    </>
  )
}

export default Page


export async function getServerSideProps(context) {
  const categoryQuery = context.query.category
  const pageQuery = context.query.page
  const pageParams = context.params.movieCategory === "top-rated"?"top_rated" : context.params.movieCategory
  try{
    const data = await getCategoryList(categoryQuery, pageParams, pageQuery);
    return {props: {data, pageParams, pageQuery, categoryQuery}}
  }
  catch(error){
    return {notFound: true}
  }
}