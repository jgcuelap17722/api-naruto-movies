import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [MoviesModule, CharactersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
