import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../servies/movies.service';
import { EMPTY, Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { imagesBaseUrl } from '../../constants/images-sizes';
import { Video } from '../../types/videos';
import { Image } from '../../types/image';
import { Actor } from '../../types/credits';
import { TvShowsService } from '../../servies/tv-shows.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit {

  showId = '';
  show$: Observable<Movie> = EMPTY;
  posterUrl = imagesBaseUrl + '/w185';
  photosUrl = imagesBaseUrl + '/w500';
  showVideos$: Observable<Video[]> = EMPTY;
  showImages$: Observable<Image[]> = EMPTY;
  showCast$: Observable<Actor[]> = EMPTY;
  showType: 'movie' | 'tv' = 'movie';

  constructor(private router: ActivatedRoute, private movieService: MoviesService, private tvService: TvShowsService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.showId = params['id'];
      this.showType = params['type'];
      if (this.showType === 'movie') {
        this.getMovieDetails();
      } else {
        this.getTvShowDetails();
      }

    })
  }

  getMovieDetails() {
    this.show$ = this.movieService.getMovieById(this.showId);
    this.showVideos$ = this.movieService.getMovieVideos(this.showId);
    this.showImages$ = this.movieService.getMovieImages(this.showId);
    this.showCast$ = this.movieService.getMovieCast(this.showId);
  }

  getTvShowDetails() {
    this.show$ = this.tvService.getTvShowById(this.showId);
    this.showImages$ = this.tvService.getTvShowImages(this.showId);
    this.showCast$ = this.tvService.getTvShowCast(this.showId);
    this.showVideos$ = this.tvService.getTvShowVideos(this.showId);
  }
}
