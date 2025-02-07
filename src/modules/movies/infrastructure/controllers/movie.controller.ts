import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { GetPopularMoviesUseCase } from "../../application/use-cases/get-popular-movies.use-case";
import { MovieResponseDto } from "../../application/dtos/movie.dto";

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly getPopularMoviesUseCase: GetPopularMoviesUseCase) {}

  @Get('popular')
  @ApiOperation({ summary: 'Get popular movies' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number
  })
  @ApiQuery({
    name: 'language',
    required: false,
    description: 'Language code (e.g., en-US)',
    type: String
  })
  @ApiResponse({
    status: 200,
    description: 'List of popular movies',
    type: MovieResponseDto
  })
  async getPopularMovies(
    @Query('page') page: number = 1,
    @Query('language') language: string = 'en-US',
  ): Promise<MovieResponseDto> {
    return this.getPopularMoviesUseCase.execute(page, language);
  }
}