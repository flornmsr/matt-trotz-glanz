import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../menu/menu.module'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact/contact.component'
import { RouterModule } from '@angular/router';
import { OverviewBookComponent } from './overview-book/overview-book.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MediaFolderComponent } from './media-folder/media-folder.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { MediaFolderPicturesComponent } from './media-folder/media-folder-pictures/media-folder-pictures.component';
import { MediaFolderFilesComponent } from './media-folder/media-folder-files/media-folder-files.component';
import {MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [HomeComponent, ContactComponent, OverviewBookComponent, MediaFolderComponent, MediaFolderPicturesComponent, MediaFolderFilesComponent, OrderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule, 
    RouterModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule, 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class BookInformationModule { }
