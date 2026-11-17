import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public dialogRef: MatDialogRef<MenuComponent>) { }

  dismissMenu() {
    this.dialogRef.close();
  }
}
