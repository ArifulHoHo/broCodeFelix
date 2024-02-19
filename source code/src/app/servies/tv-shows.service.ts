import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvShow, TvShowsDto, mapToMovie, mapToMovies, mapToMoviesDto } from '../types/tvshow';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';
import { VideoDto } from '../types/videos';
import { GenresDto } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '28155b994179c0e25845fcf8555f8eff'
  constructor(private http: HttpClient) { }

  getTvShowsByType(type: string, count = 20) {
    return this.http.get<TvShowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(map((data) => data.results.slice(0, count))).pipe(map(mapToMovies))
  }

  getTvShowById(id: string) {
    return this.http.get<TvShow>(`${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`).pipe(map(mapToMovie))
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? "search/tv" : "tv/popular";
    return this.http.get<TvShowsDto>(`${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`).pipe(map(mapToMoviesDto))
  }

  getTvShowImages(id: string, count = 30) {
    return this.http.get<ImagesDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops.slice(0, count)))
  }

  getTvShowCast(id: string) {
    return this.http.get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast))
  }

  getTvShowVideos(id: string) {
    return this.http.get<VideoDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results))
  }
  getTvShowGenres() {
    return this.http.get<GenresDto>(`${this.apiUrl}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres))
  }

  getTvShowsByGenre(genreId: string, pageNumber = 1) {
    return this.http.get<TvShowsDto>(`${this.apiUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`).pipe(map(mapToMoviesDto))

  }
}
