import Movies from '@/components/moviesList/movies/movies'
import Pagination from '@/components/moviesList/pagination/Pagination'


function MoviesList({data, pageParams, pageQuery}) {
    const genre = pageParams

    const page = parseInt(pageQuery)
    
    const str = genre.replace('_',' ')
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);

  return (
    
    <section className="main-content movieList">
        <h2 className='movielist-title'>{str2}</h2>
        <Movies data={data.results} />
        <Pagination page={page}/>
    </section>
  );
}

export default MoviesList;
