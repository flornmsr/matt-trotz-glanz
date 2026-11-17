import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { WindowsSizeService } from 'src/app/menu/windows-size.service';

@Component({
  selector: 'app-overview-book',
  templateUrl: './overview-book.component.html',
  styleUrls: ['./overview-book.component.scss']
})
export class OverviewBookComponent  {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  
  constructor(public windowsSizeService: WindowsSizeService) { }
  
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
