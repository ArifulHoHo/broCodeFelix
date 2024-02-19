import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './servies/movies.service';
import { RoundToSignificantFiguresPipe } from './custom pipes/significant-figure.pipe';
import { BannerComponent } from './components/banner/banner.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { LanguageNamePipe } from './custom pipes/language-name.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SliderComponent,
    RoundToSignificantFiguresPipe,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
    ShowsListComponent,

    LanguageNamePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    CheckboxModule,
    MessageModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
