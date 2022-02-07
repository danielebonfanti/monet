import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
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
        .then(async (userCredential) => {
          this.localStorage.setInfo(
            'jwtToken',
            await userCredential.user.getIdToken()
          );
          resolve();
        })
        .catch(() => reject());
    });
  }
}
