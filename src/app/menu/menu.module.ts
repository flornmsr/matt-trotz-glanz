import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WindowsSizeService } from './windows-size.service'




@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
    
  ],
  exports: [
    MenuComponent
  ],
  providers:[
    WindowsSizeService
  ]
})
export class MenuModule { }
