import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { WindowsSizeService } from '../../shared/windows-size.service';

@Component({
  selector: 'app-book',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  protected readonly windowsSizeService = inject(WindowsSizeService);

  private readonly videoPlayer = viewChild.required<ElementRef<HTMLVideoElement>>('videoPlayer');

  protected toggleVideo(): void {
    this.videoPlayer().nativeElement.play();
  }
}
