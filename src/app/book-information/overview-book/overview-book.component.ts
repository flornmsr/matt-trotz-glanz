import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { WindowsSizeService } from '../../menu/windows-size.service';

@Component({
  selector: 'app-overview-book',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './overview-book.component.html',
  styleUrl: './overview-book.component.scss',
})
export class OverviewBookComponent {
  protected readonly windowsSizeService = inject(WindowsSizeService);

  private readonly videoPlayer = viewChild.required<ElementRef<HTMLVideoElement>>('videoPlayer');

  protected toggleVideo(): void {
    this.videoPlayer().nativeElement.play();
  }
}
