import { Component, Input, OnInit } from '@angular/core';
import { MEDIA_TYPE, Section } from '../media-folder.component';



@Component({
  selector: 'app-media-folder-files',
  templateUrl: './media-folder-files.component.html',
  styleUrls: ['./media-folder-files.component.scss']
})
export class MediaFolderFilesComponent {

  @Input()
  public type: MEDIA_TYPE;

  @Input()
  public list: Section[];

  public MEDIATYPE = MEDIA_TYPE;

  urlToFile="./assets/files/media-folder/";

 

  constructor() { }

}
