import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresDto, Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';
import { VideoDto } from '../types/videos';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';

@Injectable()
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = ''; // enter apikey here
  constructor(private http: HttpClient) { }

  getMovieByType(type: string, count = 20) {
    return this.http.get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(map((data) => data.results.slice(0, count)))
  }

  getTrendyMovies(timeWindow = 'day', count = 20) {
    return this.http.get<MoviesDto>(`${this.apiUrl}/trending/movie/${timeWindow}?api_key=${this.apiKey}`).pipe(map((data) => data.results.slice(0, count)))
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  searchMovie(page: number, searchValue?: string) {


    const uri = searchValue ? "search/movie" : "movie/popular";


    return this.http.get<MoviesDto>(`${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string) {
    return this.http.get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results))
  }
  getMovieImages(id: string, count = 30) {
    return this.http.get<ImagesDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops.slice(0, count)))
  }
  getMovieCast(id: string) {
    return this.http.get<CreditsDto>(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast))
  }

  getMovieGenres() {
    return this.http.get<GenresDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres))
  }

  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this.http.get<MoviesDto>(`${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
  }
}
