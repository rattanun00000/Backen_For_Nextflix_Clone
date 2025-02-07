export class Movie {
    constructor(
      public readonly id: number,
      public readonly title: string,
      public readonly overview: string,
      public readonly posterPath: string,
      public readonly backdropPath: string,
      public readonly releaseDate: string,
      public readonly voteAverage: number,
      public readonly voteCount: number,
    ) {}
  }
  
  export class MovieCollection {
    constructor(
      public readonly page: number,
      public readonly results: Movie[],
      public readonly totalPages: number,
      public readonly totalResults: number,
    ) {}
  }