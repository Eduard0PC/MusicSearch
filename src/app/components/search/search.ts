import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Music } from '../../services/music';
import { MusicModal } from '../music-modal/music-modal';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule, MusicModal],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class Search {
  searchTerm = '';
  songs: any[] = [];
  selectedSong: any | null = null;
  p: number = 1;
  hasSearched = false;

  constructor(private musicService: Music) {}

  search() {
    this.hasSearched = true;
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
