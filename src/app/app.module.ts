import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },

      { path: 'photos', component: PhotosComponent },
      /* UPDATE W COMPONENTS */
      { path: 'audios', component: HomeComponent },
      { path: 'videos', component: HomeComponent },
      { path: 'shop', component: HomeComponent },

      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
