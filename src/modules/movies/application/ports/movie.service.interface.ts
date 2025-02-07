import { MovieResponseDto } from "../dtos/movie.dto";

export interface IMovieService {
    getPopularMovies(page: number, language: string): Promise<MovieResponseDto>;
  }