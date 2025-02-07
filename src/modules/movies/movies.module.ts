import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MoviesController } from "./infrastructure/controllers/movie.controller";
import { GetPopularMoviesUseCase } from "./application/use-cases/get-popular-movies.use-case";
import { TmdbMovieAdapter } from "./infrastructure/adapters/tmdb-movie.adapter";

@Module({
    imports: [
      HttpModule,
      ConfigModule,
    ],
    controllers: [MoviesController],
    providers: [
      GetPopularMoviesUseCase,
      {
        provide: 'IMovieRepository',
        useClass: TmdbMovieAdapter,
      },
    ],
  })
  export class MoviesModule {}