import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-music-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-modal.html',
  styleUrls: ['./music-modal.css'],
})
export class MusicModal {
  @Input() song: any | null = null;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
