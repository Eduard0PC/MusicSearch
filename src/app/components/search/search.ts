import { Component } from '@angular/core';
import { Music } from '../../services/music';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm = '';
  songs: any[] = [];

  constructor(private musicService: Music) {}

  search() {
    this.musicService.searchMusic(this.searchTerm).subscribe((res: any) => {
      this.songs = res.data;
      console.log(res);
      console.log(this.songs);
    });
  }
}
