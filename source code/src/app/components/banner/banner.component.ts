import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../servies/movies.service';
import { Observable, map } from 'rxjs';
import { Movie, MoviesDto } from '../../types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() bannerTitle !: string;
  @Input() content !: Movie[];
  @Input() showType: 'movie' | 'tv' = 'movie';
}

