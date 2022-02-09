import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private auth: Auth,
    private readonly localStorage: LocalStorageService
  ) {}

  login({ email, password }: any) {
    return new Promise<void>((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  logout() {
    signOut(this.auth);
  }
}
