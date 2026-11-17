import {Injectable} from '@angular/core';

@Injectable()
export class WindowsSizeService {

  isMobile: boolean;

  constructor() {
  }

  windowsSizeChanged(isMobile: boolean) {
    if (isMobile !== undefined && this.isMobile !== undefined && isMobile !== this.isMobile) {
      window.location.reload();
    }
    this.isMobile = isMobile;
  }


}
