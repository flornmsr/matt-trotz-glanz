import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private readonly dialogRef = inject(MatDialogRef<MenuComponent>);

  protected dismissMenu(): void {
    this.dialogRef.close();
  }
}
