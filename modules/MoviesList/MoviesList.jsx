import Movies from '@/components/moviesList/movies/movies'
import Pagination from '@/components/moviesList/pagination/Pagination'


function MoviesList({data, pageParams, pageQuery, categoryQuery, str2}) {
    const genre = pageParams

    const page = parseInt(pageQuery)
    

  return (
    
    <section className="main-content movieList">
        <h2 className='movielist-title'>{str2}</h2>
        <Movies data={data.results} categoryQuery={categoryQuery}/>
        <Pagination page={page}/>
    </section>
  );
}

export default MoviesList;
