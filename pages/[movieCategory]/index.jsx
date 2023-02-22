import MoviesList from '@/modules/MoviesList/MoviesList'
import { getCategoryList } from "@/pages/api/moviesFetch";

function Page({data, pageParams, pageQuery, categoryQuery}) {
return (
    <>
      <MoviesList data={data} pageParams={pageParams} pageQuery={pageQuery} categoryQuery={categoryQuery}/>
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