import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

export default function HomeContainer({
  topRatedMovies = [],
  selectedCategory,
  popularMovies = [],
  categories = [],
}) {
  return (
    <>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 7)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favurites"
        movies={popularMovies.slice(7, 14)}
      />
    </>
  );
}
