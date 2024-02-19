import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { imagesBaseUrl } from '../../constants/images-sizes';
import { TvShow } from '../../types/tvshow';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem !: Movie;
  @Input() showType !: 'movie' | 'tv';

  imagesBaseUrl = imagesBaseUrl;
}
