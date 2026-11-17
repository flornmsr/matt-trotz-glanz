import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { AuthenticationService } from './authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [AuthenticationService]
})
export class AuthModule { }