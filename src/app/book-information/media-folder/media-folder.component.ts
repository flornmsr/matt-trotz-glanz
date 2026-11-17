import { Component, OnInit } from '@angular/core';


export enum MEDIA_TYPE {
  FILE,
  LINK
}

export interface Section {
  name: string;
  updated: Date;
  path: string;
}

@Component({
  selector: 'app-media-folder',
  templateUrl: './media-folder.component.html'
})
export class MediaFolderComponent {

  public MEDIATYPE = MEDIA_TYPE;


  files: Section[] = [
    {
      name: 'Medienmitteilung',
      updated: new Date('9/20/20'),
      path: 'Medieninfo_DepressionImSpitzernsport_200920.pdf'
    },
    {
      name: 'Vernissage',
      updated: new Date('9/20/20'),
      path: 'Vernissage_MatttrotzGlanz.pdf'
    },
    {
      name: 'Klappentext',
      updated: new Date('9/20/20'),
      path: 'Klappentext.Florian.pdf'
    },
    {
      name: 'Über den Autor',
      updated: new Date('9/20/20'),
      path: 'Über_den_Autor.pdf'
    },
  ];

  links: Section[] = [
    {
      name: "Radio Bern 1",
      updated: new Date('10/13/20'),
      path: "https://www.radiobern1.ch/news/berner-ol-laufer-uber-depressionen-im-spitzensport-91861/"
    },
    {
      name: "Radio Bern 1",
      updated: new Date('10/13/20'),
      path: "https://www.telebaern.tv/talktaeglich/depression-im-spitzensport-139167814"
    },
    {
      name: 'SRF',
      updated: new Date('9/20/20'),
      path: 'https://www.srf.ch/sport/mehr-sport/orientierungslauf/depressionen-im-spitzensport-orientierungslaeufer-florian-schneider-bricht-ein-tabu'
    },
    {
      name: 'Swiss Orienteering',
      updated: new Date('9/20/20'),
      path: 'https://www.swiss-orienteering.ch/de/news/ol/1998-matt-trotz-glanz-ol-laeufer-florian-schneider-veroeffentlicht-eigenes-buch.html'
    },
    {
      name: 'Aargauer Zeitung',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Aargauer_Zeitung.pdf'
    },
    {
      name: 'Berner OberländerTT',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Berner_OberländerTT.pdf'
    },{
      name: 'Berner Zeitung',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Berner_Zeitung.pdf'
    },{
      name: 'Bote der Urschweiz',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Bote_der_Urschweiz.pdf'
    },{
      name: 'Luzerner Zeitung',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Luzerner_Zeitung.pdf'
    },{
      name: 'NZZ',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/NZZ_ganz.pdf'
    },{
      name: 'Solothurner Zeitung',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Solothurner_Zeitung.pdf'
    },
    {
      name: 'Wiler Zeitung',
      updated: new Date('9/22/20'),
      path: './assets/files/media-folder/paper/Wiler_Zeitung.pdf'
    }

  ];

  constructor() { }

}
