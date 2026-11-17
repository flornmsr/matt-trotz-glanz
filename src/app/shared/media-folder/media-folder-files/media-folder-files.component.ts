import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MEDIA_TYPE, Section } from '../media-folder.component';

@Component({
  selector: 'app-media-folder-files',
  imports: [DatePipe, MatIconModule, MatListModule],
  templateUrl: './media-folder-files.component.html',
  styleUrl: './media-folder-files.component.scss',
})
export class MediaFolderFilesComponent {
  readonly type = input.required<MEDIA_TYPE>();
  readonly list = input.required<Section[]>();

  protected readonly MEDIATYPE = MEDIA_TYPE;
  protected readonly urlToFile = './assets/files/media-folder/';
}
