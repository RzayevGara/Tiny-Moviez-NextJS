import TitleSwiper from "@/components/home/title-swiper/TitleSwiper";
import CategorySwiper from "@/components/home/category-swiper/CategorySwiper";

function Home({categoryDataPopular, categoryDataTop}) {

  return (
    <section className="main-content">
      <TitleSwiper data={categoryDataTop}/>
      <CategorySwiper data={categoryDataPopular?.results} title="Popular on TinyMoviez" />
      <CategorySwiper data={categoryDataTop?.results} title="Top Rated on TinyMoviez" />
    </section>
  );
}

export default Home;