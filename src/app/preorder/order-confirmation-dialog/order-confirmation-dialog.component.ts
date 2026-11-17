import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-order-confirmation-dialog',
  templateUrl: './order-confirmation-dialog.html'
})
export class OrderConfirmationDialog {

  constructor(
    public dialogRef: MatDialogRef<OrderConfirmationDialog>,
  ) {
  }

  close(){
    this.dialogRef.close();
  }

}
