
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    userData: Observable<firebase.User>;
    userDetails: firebase.User = null;
    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    }

    /* Sign in */
    signIn(value) {
        this.angularFireAuth
            .signInWithEmailAndPassword(value.email, value.password)
            .then(res => {
                console.log('Successfully signed in!');
                this.router.navigate(['start']);
            })
            .catch(err => {
                console.log('Something is wrong:', err.message);
            });
    }

    signOut() {
        this.angularFireAuth
        .signOut()
        .then(r => {
            this.router.navigate(['anmelden']);
        })
    }

    getAuthenticated(): Observable<any> { return this.angularFireAuth.authState; }
}
