import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreorderFormComponent } from './preorder-form/preorder-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderConfirmationDialog } from './order-confirmation-dialog/order-confirmation-dialog.component';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { OrderService } from './order.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PreorderFormComponent, OrderConfirmationDialog],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatDialogModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule
  ],
  providers:[
    OrderService,
  ]
})
export class PreorderModule { }
