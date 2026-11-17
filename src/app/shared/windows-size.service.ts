import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

const DESKTOP_QUERY = '(min-width: 1000px)';

@Injectable({ providedIn: 'root' })
export class WindowsSizeService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly isDesktop = toSignal(
    this.breakpointObserver.observe(DESKTOP_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(DESKTOP_QUERY) },
  );

  /** true unter 1000px Breite. Aktualisiert sich live, ein Neuladen der Seite ist nicht mehr nötig. */
  readonly isMobile = computed(() => !this.isDesktop());
}
