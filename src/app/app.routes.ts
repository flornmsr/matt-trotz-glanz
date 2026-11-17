import { Routes } from '@angular/router';
import { HomeComponent } from './book-information/home/home.component';
import { ContactComponent } from './book-information/contact/contact.component';
import { OverviewBookComponent } from './book-information/overview-book/overview-book.component';
import { OrderComponent } from './book-information/order/order.component';

export const routes: Routes = [
  { path: 'start', component: HomeComponent },
  { path: 'buch', component: OverviewBookComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'bestellen', component: OrderComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
