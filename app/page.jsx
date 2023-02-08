import TitleSwiper from '@/components/home/title-swiper/TitleSwiper'
import CategorySwiper from '@/components/home/category-swiper/CategorySwiper'

function page() {
  return (
    <section className="main-content">
      <TitleSwiper/>
      <CategorySwiper genre="popular" title="Popular on TinyMoviez"/>
      <CategorySwiper genre="top_rated" title="Top Rated on TinyMoviez"/>
    </section>
  )
}

export default page