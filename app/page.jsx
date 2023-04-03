import HomeContainer from "containers/home";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";


import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";

export default function Home() {
  return (
    <>
      <FeaturedMovie movie={Movies.results[0]} />
      <HomeContainer />
      <Categories categories={Genres.genres.slice(0,7)} />
    </>
  );
}
