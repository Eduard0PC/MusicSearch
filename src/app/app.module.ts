import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { Search } from './components/search/search';
import { MusicModal } from './components/music-modal/music-modal';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    App,
    Search,
    MusicModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}

