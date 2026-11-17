import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: 'start', component: HomeComponent },
  { path: 'buch', component: BookComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'bestellen', component: OrderComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
