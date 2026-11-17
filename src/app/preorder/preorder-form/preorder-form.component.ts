import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { OrderConfirmationDialog } from '../order-confirmation-dialog/order-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-preorder-form',
  templateUrl: './preorder-form.component.html',
  styleUrls: ['./preorder-form.component.scss']
})
export class PreorderFormComponent implements OnInit {
  // orderAddressForm: FormGroup;
  // orderQuantityForm: FormGroup;

  // @ViewChild('stepper')
  // stepper: any;

  // public numberOfBooks: number = 1;

  // private _reCaptchaState = false;

  constructor( private router: Router,private orderService: OrderService) { }

  ngOnInit(): void {
    window.open("https://www.kaleidosbuch.ch/product-page/MatttrotzGlanz", '_blank')
    this.router.navigate(['./'])
    // this.orderAddressForm = this.fb.group({
    //   name: new FormControl('', [Validators.required]),
    //   prename: new FormControl('', [Validators.required]),
    //   address: new FormControl('', [Validators.required]),
    //   zip: new FormControl('', [Validators.pattern('^[0-9]{4}$'), Validators.required]),
    //   city: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email])
    // })

    // this.orderQuantityForm = this.fb.group({
    //   numberOfBookOrders: new FormControl(this.numberOfBooks, Validators.required),
    //   price: new FormControl({value: this.numberOfBooks*25,disabled:true})
    // });

    // this.orderService.getOrders().subscribe(v => {
    //   console.log(v.length)
    //   console.log(v)
    //   this.orderService.downloadFile(v)
    // })
  }

//   orderBook(address, order){
//     const bookOrder = {
//       order,
//       address
//     }
//     console.log(bookOrder);
//     this.orderService.createBookOrder(bookOrder);

//     this.stepper.reset();
//     this.dialog.open(OrderConfirmationDialog);
//     this.router.navigate(['/start'])
//   }

//   getErrorMessage(control: FormControl){
//     if(this.orderAddressForm.get('zip')==control){
//       if (control.hasError('required')) {
//         return 'Die PLZ muss 4-Stellig sein';
//       }
//     }
    
//     if (control.hasError('required')) {
//       return 'Du musst einen Wert eingeben';
//     }

//     return control.hasError('email') ? 'Keine gültige Email' : '';
//   }

//   public resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response: ${captchaResponse}`);
//     this._reCaptchaState = true;
//   }

//   get reCaptchaState(): boolean {
//     return this._reCaptchaState;
//   }
  


// }
}