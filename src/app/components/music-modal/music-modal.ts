import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-modal.html',
  styleUrl: './music-modal.css',
})
export class MusicModal {
  @Input() song: any | null = null;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
