import Home from '@/modules/Home/Home'
import { getCategoryList } from "@/pages/api/moviesFetch";
import Head from 'next/head'

function Page({categoryDataTop, categoryDataPopular}) {
  return (
    <>
      <Head>
        <title>Tiny Moviez</title>
      </Head>
      <Home categoryDataTop={categoryDataTop} categoryDataPopular={categoryDataPopular}/>
    </>
  )
}

export default Page

export async function getServerSideProps({query}) {
  const searchParams = query.category || 'movie'
  console.log(query)
  try{
    const categoryDataTop = await getCategoryList(searchParams, "top_rated", 1);
    const categoryDataPopular = await getCategoryList(searchParams, "popular", 1);

    return {props: {categoryDataTop, categoryDataPopular}}
  }
  catch(error){
    return {notFound: true}
  }
}