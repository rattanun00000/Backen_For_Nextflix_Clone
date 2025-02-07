import { Inject, Injectable } from "@nestjs/common";
import { MovieResponseDto } from "../dtos/movie.dto";
import { MovieMapper } from "../mappers/movie.mapper";
import { IMovieRepository } from "../../domain/repositories/movie.repository.interface";

@Injectable()
export class GetPopularMoviesUseCase {
  constructor(
    @Inject('IMovieRepository')
    private readonly movieRepository: IMovieRepository,
  ) {}

  async execute(page: number = 1, language: string = 'en-US'): Promise<MovieResponseDto> {
    const movieCollection = await this.movieRepository.getPopularMovies(page, language);
    return MovieMapper.toCollectionDto(movieCollection);
  }
}