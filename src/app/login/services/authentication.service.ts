import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private auth: Auth) {}

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }
}