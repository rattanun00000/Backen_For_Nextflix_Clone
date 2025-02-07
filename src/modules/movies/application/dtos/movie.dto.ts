import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty({
    example: 550,
    description: 'Movie ID'
  })
  id: number;

  @ApiProperty({
    example: 'Fight Club',
    description: 'Movie title'
  })
  title: string;

  @ApiProperty({
    example: 'A ticking-time-bomb insomniac...',
    description: 'Movie overview'
  })
  overview: string;

  @ApiProperty({
    example: 'https://image.tmdb.org/t/p/w300/poster.jpg',
    description: 'Poster image path'
  })
  poster_path: string;

  @ApiProperty({
    example: 'https://image.tmdb.org/t/p/w500/backdrop.jpg',
    description: 'Backdrop image path'
  })
  backdrop_path: string;

  @ApiProperty({
    example: '1999-10-15',
    description: 'Release date'
  })
  release_date: string;

  @ApiProperty({
    example: 8.4,
    description: 'Average vote score'
  })
  vote_average: number;

  @ApiProperty({
    example: 23383,
    description: 'Number of votes'
  })
  vote_count: number;
}

export class MovieResponseDto {
  @ApiProperty({
    example: 1,
    description: 'Current page number'
  })
  page: number;

  @ApiProperty({
    type: [MovieDto],
    description: 'List of movies'
  })
  results: MovieDto[];

  @ApiProperty({
    example: 500,
    description: 'Total number of pages'
  })
  total_pages: number;

  @ApiProperty({
    example: 10000,
    description: 'Total number of results'
  })
  total_results: number;
}
  