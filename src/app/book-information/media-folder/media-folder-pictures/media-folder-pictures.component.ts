import { Component, OnInit, HostListener } from '@angular/core';
import { WindowsSizeService } from 'src/app/menu/windows-size.service';

@Component({
  selector: 'app-media-folder-pictures',
  templateUrl: './media-folder-pictures.component.html'
})
export class MediaFolderPicturesComponent {



  myImages = [
    {
      previewPath: '/assets/pictures/cover_book.png',
      path: '/assets/pictures/cover_book.jpeg',
      name: 'Buch Cover',
      photographer: 'Kaleidosbuch'
    },
    {
      previewPath: '/assets/pictures/cover_book_normal.jpeg',
      path: '/assets/pictures/cover_book_normal.jpeg',
      name: 'Buch Cover Normal',
      photographer: 'Kaleidosbuch'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_Nationalkader.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_Nationalkader.jpg',
      name: 'Portrait Nationalkader',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Sonnenuntergang.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Sonnenuntergang.jpg',
      name: 'Sonnenuntergang',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Bahn_1.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Bahn_1.jpg',
      name: 'Bahn 1',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Bahn_2.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Bahn_2.jpg',
      name: 'Bahn 2',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Geheimnisvoll.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Geheimnisvoll.jpg',
      name: 'Geheimnisvoll',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Gegenlicht.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Gegenlicht.jpg',
      name: 'Gegenlicht',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Kurve.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Kurve.jpg',
      name: 'Kurve',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Nebel_Rennen.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Nebel_Rennen.jpg',
      name: 'Nebel Rennnen',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_Aare.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_Aare.jpg',
      name: 'Portrait Aare',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_Aare_2.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_Aare_2.jpg',
      name: 'Portrait Aare 2',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_Aare_3.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_Aare_3.jpg',
      name: 'Portrait Aare 3',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_Aare_4.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_Aare_4.jpg',
      name: 'Portrait Aare 4',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Portrait_2015.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Portrait_2015.jpg',
      name: 'Portrait 2015',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Sprung.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Sprung.jpg',
      name: 'Sprung',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Stephan_Wiesner/preview/Wald.jpg',
      path: '/assets/pictures/Stephan_Wiesner/Wald.jpg',
      name: 'Wald',
      photographer: 'Stephan Wiesner'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Abendsonne.jpg',
      path: '/assets/pictures/Ulf_Schiller/Abendsonne.jpg',
      name: 'Abendsonne',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Dämmerung.jpg',
      path: '/assets/pictures/Ulf_Schiller/Dämmerung.jpg',
      name: 'Dämmerung',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Grindelwald.jpg',
      path: '/assets/pictures/Ulf_Schiller/Grindelwald.jpg',
      name: 'Grindelwald',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Herbst.jpg',
      path: '/assets/pictures/Ulf_Schiller/Herbst.jpg',
      name: 'Herbst',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Herbst_2.jpg',
      path: '/assets/pictures/Ulf_Schiller/Herbst_2.jpg',
      name: 'Herbst 2',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/im_Dunkeln.jpg',
      path: '/assets/pictures/Ulf_Schiller/im_Dunkeln.jpg',
      name: 'Im Dunkeln',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Lobhörner.jpg',
      path: '/assets/pictures/Ulf_Schiller/Lobhörner.jpg',
      name: 'Lobhörner',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Lobhörner_2.jpg',
      path: '/assets/pictures/Ulf_Schiller/Lobhörner_2.jpg',
      name: 'Lobhörner 2',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/See.jpg',
      path: '/assets/pictures/Ulf_Schiller/See.jpg',
      name: 'See',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Spiegelung.jpg',
      path: '/assets/pictures/Ulf_Schiller/Spiegelung.jpg',
      name: 'Spiegelung',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Sprung.jpg',
      path: '/assets/pictures/Ulf_Schiller/Sprung.jpg',
      name: 'Sprung',
      photographer: 'Ulf Schiller'
    },
    {
      previewPath: '/assets/pictures/Ulf_Schiller/preview/Sumpf.jpg',
      path: '/assets/pictures/Ulf_Schiller/Sumpf.jpg',
      name: 'Sumpf',
      photographer: 'Ulf Schiller'
    }
  

    
  ]

  constructor(public windwosSizeService: WindowsSizeService) {

  }




}
