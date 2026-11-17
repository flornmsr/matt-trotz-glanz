import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './book-information/home/home.component';
import { ContactComponent } from './book-information/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { OverviewBookComponent } from './book-information/overview-book/overview-book.component';
import { PreorderFormComponent } from './preorder/preorder-form/preorder-form.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['anmelden']);
const redirectLoggedInToStart = () => redirectLoggedInTo(['start']);

const routes: Routes = [
  {
    path: 'kontakt', component: ContactComponent,
  },
  {
    path: 'start', component: HomeComponent
  },
  {
    path: 'buch', component: OverviewBookComponent,
  },
  {
    path: 'bestellen', component: PreorderFormComponent,
  },
  
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
