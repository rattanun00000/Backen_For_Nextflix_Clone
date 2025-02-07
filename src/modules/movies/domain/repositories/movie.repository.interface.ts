import { MovieCollection } from "../entities/movie.entity";

export interface IMovieRepository {
    getPopularMovies(page: number, language: string): Promise<MovieCollection>;
  }