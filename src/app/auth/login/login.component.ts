import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  email: string;
  password: string;


  constructor(public authenticationService: AuthenticationService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  signIn() {
    console.log(this.loginForm.value)
    this.authenticationService.signIn(this.loginForm.value);
  }

  signOut() {
    this.authenticationService.signOut();
  }

  getErrorMessage(control: FormControl){
    console.log(this.loginForm.get('email'));
    if (control.hasError('required')) {
      return 'You must enter a value';
    }

    return control.hasError('email') ? 'Not a valid email' : '';
  }

}
