import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../servies/movies.service';
import { Observable, map } from 'rxjs';
import { Genres, Movie, MoviesDto } from '../../types/movie';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../../servies/tv-shows.service';
import { mapToMovies, mapToMoviesDto } from '../../types/tvshow';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss'
})
export class ShowsListComponent implements OnInit {

  showLists$: Observable<MoviesDto> = new Observable<MoviesDto>();
  genres$: Observable<Genres[]> = new Observable<Genres[]>();
  searchQuery: string = "";
  showType: 'movie' | 'tv' = 'movie';
  showFilter: string[] = [];
  first: number = 0;
  urlFilter: string = "";

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private tvService: TvShowsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.showType = params['type'];
      this.urlFilter = params['genreId'] || '';

      this.showFilter = this.urlFilter ? this.urlFilter.split('%7C') : [];

      this.getPagedShows(this.showType, 1);
      if (this.showType === 'movie') {
        this.genres$ = this.movieService.getMovieGenres();
      } else {
        this.genres$ = this.tvService.getTvShowGenres();
      }
    })

  }

  getPagedShows(showType: 'movie' | 'tv', page: number, searchKeyword?: string) {
    if (this.urlFilter && !this.searchQuery) {
      if (this.showType === 'movie') {
        this.showLists$ = this.movieService.getMoviesByGenre(this.urlFilter, page)
      } else {
        this.showLists$ = this.tvService.getTvShowsByGenre(this.urlFilter, page)
      }
    } else {
      if (this.showType === 'movie') {
        this.showLists$ = this.movieService.searchMovie(page, searchKeyword);
      } else {
        this.showLists$ = this.tvService.searchTvShows(page, searchKeyword);
      }
    }

  }

  searchShow() {
    this.getPagedShows(this.showType, 1, this.searchQuery);
  }

  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.first = event.first ? event.first : 0;
    this.getPagedShows(this.showType, pageNumber, this.searchQuery);
  }

  mergeFilter() {
    return this.showFilter.join('%7C')
  }


}
