import TitleSwiper from "@/components/home/title-swiper/TitleSwiper";
import CategorySwiper from "@/components/home/category-swiper/CategorySwiper";
import { getCategoryList } from "@/app/api/moviesFetch";

const fetchProductsforTitle = async (searchParams) => {
  const data = await getCategoryList(searchParams, "top_rated", 1);
  return data;
};

const fetchProductsforCategory = async (searchParams, genre) => {
  const data = await getCategoryList(searchParams, genre, 1);
  return data;
};

async function Index({context}) {
  const searchParams = context.searchParams.category || "movie";

  const titleData = await fetchProductsforTitle(searchParams);

  const categoryDataPopular = await fetchProductsforCategory(
    searchParams,
    "popular"
  );

  const categoryDataTop = await fetchProductsforCategory(
    searchParams,
    "top_rated"
  );

  return (
    <section className="main-content">
      <TitleSwiper data={titleData} />
      <CategorySwiper
        data={categoryDataPopular}
        title="Popular on TinyMoviez"
      />
      <CategorySwiper data={categoryDataTop} title="Top Rated on TinyMoviez" />
    </section>
  );
}

export default Index;
