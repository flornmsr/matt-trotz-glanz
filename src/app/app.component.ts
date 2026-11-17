import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from './menu/menu/menu.component';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { WindowsSizeService } from './menu/windows-size.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matt-trotz-glanz-web-app';
  public currentRoute;

  constructor(public menuDialog: MatDialog,
    private router: Router,
    public breakpointObserver: BreakpointObserver,
    public windowsSizeService: WindowsSizeService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute);
      }
    })
    this.breakpointObserver
      .observe(['(min-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 1000px or over!');
        } else {
          console.log('Viewport is getting smaller!');
        }
        this.windowsSizeService.windowsSizeChanged(!state.matches);
      });
  }

  isMenuOpen: boolean = false;

  menuIconPaths: string[] = [
    "../../../assets/files/burger.png",
    "../../../assets/files/cross.png"
  ];

  open() {
    if (!this.isMenuOpen) {
      this.isMenuOpen = !this.isMenuOpen

      let config = {
        panelClass: 'custom-dialog',
        backdropClass: 'backdrop-dialog'
      };

      const dialogRef = this.menuDialog.open(MenuComponent, config);

      dialogRef.afterClosed().subscribe(result => {
        this.isMenuOpen = false;
      });
    }
    else {
      this.menuDialog.closeAll();
    }
  }

}
