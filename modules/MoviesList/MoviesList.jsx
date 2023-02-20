import Movies from '@/components/moviesList/movies/movies'
import { getCategoryList } from "@/app/api/moviesFetch";
import Pagination from '@/components/moviesList/pagination/Pagination'
import { notFound } from "next/navigation"

const fetchMovies = async (searchParams, genre, page) => {
  try{
    const genreNew = genre=="top-rated"?"top_rated":genre
    const data = await getCategoryList(searchParams, genreNew, page);
    return data;
  }catch{
    return null
  }
};

async function MoviesList({context}) {
    const searchParams = context.searchParams.category || "movie";
    const genre = context.params.category

    const page = parseInt(context.searchParams.page)
    
    const str = genre.replace('-',' ')
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    
    const moviesData = await fetchMovies(
      searchParams,
      genre,
      page
      );

      if (!moviesData) {
        notFound()	
      }

  return (
    
    <section className="main-content movieList">
        <h2 className='movielist-title'>{str2}</h2>
        <Movies data={moviesData.results} />
        <Pagination page={page}/>
    </section>
  );
}

export default MoviesList;
