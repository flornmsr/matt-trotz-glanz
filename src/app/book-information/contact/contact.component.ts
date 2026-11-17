import { Component } from '@angular/core';

// Das Feedback-Formular hat Einträge in der Firebase-Datenbank gespeichert.
// Firebase wurde entfernt, deshalb ist das Formular im Template auskommentiert.
// Ursprüngliche Logik (benötigte FormBuilder + OrderService):
//
// feedbackForm: FormGroup;
// feedbackDone: boolean;
//
// constructor(private fb: FormBuilder, private orderService: OrderService) { }
//
// ngOnInit(): void {
//   this.feedbackForm = this.fb.group({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', Validators.required),
//     feedback: new FormControl('', Validators.required)
//   });
//   this.feedbackDone = localStorage.getItem('feedback') == 'true';
// }
//
// submitFeedback() {
//   this.orderService.feedback(this.feedbackForm.value);
//   this.feedbackForm.reset();
//   localStorage.setItem('feedback', 'true');
//   this.feedbackDone = true;
// }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent { }
