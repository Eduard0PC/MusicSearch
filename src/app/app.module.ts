import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { Search } from './components/search/search';
import { MusicModal } from './components/music-modal/music-modal';
import { MusicList } from './components/music-list/music-list';

@NgModule({
  declarations: [
    App,
    Search,
    MusicModal,
    MusicList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}

