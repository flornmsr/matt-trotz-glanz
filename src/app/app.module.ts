import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookInformationModule } from './book-information/book-information.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { MenuModule } from './menu/menu.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from './auth/auth.module';
import { MatDividerModule } from '@angular/material/divider';
import { PreorderModule } from './preorder/preorder.module';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookInformationModule,
    AuthModule,
    MenuModule,
    PreorderModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    MatButtonModule,
    MatDividerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: '6Lf4XskZAAAAADqDkFaukW9kAQE1zXOmJCPG2Joj' } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
