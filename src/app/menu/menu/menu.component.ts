import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public dialogRef: MatDialogRef<MenuComponent>,
    public authService: AuthenticationService
  ) {
  }

  dismissMenu() {
    this.dialogRef.close();
  }

  logOut() {
    this.dismissMenu();
    this.authService.signOut();
  }
}
