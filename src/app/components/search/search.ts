import { Component } from '@angular/core';
import { Music } from '../../services/music';

@Component({
  selector: 'app-search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchTerm = '';
  songs: any[] = [];
  selectedSong: any | null = null;

  constructor(private musicService: Music) {}

  search() {
    this.musicService.searchMusic(this.searchTerm).subscribe((res: any) => {
      this.songs = res.data;
      console.log(res);
      console.log(this.songs);
    });
  }

  openSong(song: any) {
    this.selectedSong = song;
  }

  closeModal() {
    this.selectedSong = null;
  }
}
