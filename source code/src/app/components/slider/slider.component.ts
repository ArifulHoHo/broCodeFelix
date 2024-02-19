
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../servies/movies.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { imagesBaseUrl } from '../../constants/images-sizes';
import { Movie } from '../../types/movie';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],

})
export class SliderComponent implements OnInit {

  @Input() slides: Movie[] = [];
  @Input() isHeader = false;

  slideIndex = 0;
  imagesBaseUrl = imagesBaseUrl;


  constructor(private moviesService: MoviesService) { }



  ngOnInit(): void {
    if (!this.isHeader) {
      this.changeSlide();
    }

  }


  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 15) {
        this.slideIndex = 0;
      }
    }, 5000)
  }
}
