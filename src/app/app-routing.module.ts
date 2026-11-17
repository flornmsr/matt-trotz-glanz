import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './book-information/home/home.component';
import { ContactComponent } from './book-information/contact/contact.component';
import { OverviewBookComponent } from './book-information/overview-book/overview-book.component';
import { OrderComponent } from './book-information/order/order.component';

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
    path: 'bestellen', component: OrderComponent,
  },

  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
