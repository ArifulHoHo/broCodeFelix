import { Component } from '@angular/core';
import { MoviesService } from '../../servies/movies.service';
import { TvShowsService } from '../../servies/tv-shows.service';
import { map } from 'rxjs';
import { TvShow, mapToMovies } from '../../types/tvshow';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  popularmovies$ = this.moviesService.getMovieByType('popular', 12);
  trendingmovies$ = this.moviesService.getTrendyMovies();

  upcomingmovies$ = this.moviesService.getMovieByType('upcoming', 12);
  topratedmovies$ = this.moviesService.getMovieByType('top_rated', 12);
  popularTvShows$ = this.tvService.getTvShowsByType('popular', 12)


  constructor(private moviesService: MoviesService, private tvService: TvShowsService) { }


}
