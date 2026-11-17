import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter, map } from 'rxjs';
import { MenuComponent } from './menu/menu/menu.component';
import { WindowsSizeService } from './menu/windows-size.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly menuDialog = inject(MatDialog);
  private readonly router = inject(Router);
  protected readonly windowsSizeService = inject(WindowsSizeService);

  protected readonly currentRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: '' },
  );

  protected readonly isMenuOpen = signal(false);

  protected readonly menuIconPaths = ['assets/files/burger.png', 'assets/files/cross.png'];

  protected isHome(): boolean {
    const route = this.currentRoute();
    return route === '/start' || route === '/';
  }

  protected menuIcon(): string {
    return `url(${this.menuIconPaths[this.isMenuOpen() ? 1 : 0]})`;
  }

  protected open(): void {
    if (this.isMenuOpen()) {
      this.menuDialog.closeAll();
      return;
    }
    this.isMenuOpen.set(true);
    const dialogRef = this.menuDialog.open(MenuComponent, {
      panelClass: 'custom-dialog',
      backdropClass: 'backdrop-dialog',
    });
    dialogRef.afterClosed().subscribe(() => this.isMenuOpen.set(false));
  }
}
