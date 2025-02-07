import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from '@nestjs/axios';
import { Movie, MovieCollection } from "../../domain/entities/movie.entity";
import { lastValueFrom, map } from "rxjs";
import { IMovieRepository } from "../../domain/repositories/movie.repository.interface";

@Injectable()
export class TmdbMovieAdapter implements IMovieRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getPopularMovies(page: number, language: string): Promise<MovieCollection> {
    const apiKey = this.configService.get('TMDB_API_KEY');
    const baseUrl = this.configService.get('TMDB_BASE_URL');

    try {
      const response = await lastValueFrom(
        this.httpService.get(`${baseUrl}/movie/popular`, {
          params: {
            api_key: apiKey,
            language,
            page,
          },
        }).pipe(
          map(response => {
            const movies = response.data.results.map(movie => new Movie(
              movie.id,
              movie.title,
              movie.overview,
              `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
              `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
              movie.release_date,
              movie.vote_average,
              movie.vote_count,
            ));

            return new MovieCollection(
              response.data.page,
              movies,
              response.data.total_pages,
              response.data.total_results,
            );
          })
        )
      );
      
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch popular movies: ${error.message}`);
    }
  }
}