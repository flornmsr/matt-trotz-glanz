import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OrderService } from 'src/app/preorder/order.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;

  feedbackDone: boolean;

  constructor(private fb: FormBuilder, private orderService: OrderService) { }
  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      feedback: new FormControl('', Validators.required)
    })

    this.feedbackDone = localStorage.getItem("feedback") == "true" ? true : false;

  }

  submitFeedback() {
    this.orderService.feedback(this.feedbackForm.value)
    this.feedbackForm.reset();
    localStorage.setItem("feedback", "true");
    this.feedbackDone = true;

  }



}
