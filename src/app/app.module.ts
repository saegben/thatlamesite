import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AudiosComponent } from './audios/audios.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { ShopComponent } from './shop/shop.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },

      { path: 'photos', component: PhotosComponent },
      { path: 'audios', component: AudiosComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'shop', component: ShopComponent },

      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
