import React from "react";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";

import MovieContainer from "@/containers/movie";



async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
