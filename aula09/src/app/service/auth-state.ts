import { Auth, AuthError, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, UserCredential } from 'firebase/auth';
import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  private auth= inject(FirebaseService).auth;
  private enviromentInjector= inject(EnvironmentInjector);
  private routes= inject(Router);

  private user$ = new BehaviorSubject<User | null>(null);


  initAuthListener(): void {
    runInInjectionContext(this.enviromentInjector, () => {
    onAuthStateChanged(this.auth, (user: User | null) => {
    return this.user$.next(user);
    });
    });
}


  getUser(): Observable<User | null> {
    return this.user$.asObservable();
} 

  isAuthenticated = (): boolean => {
    return this.user$.value !== null;
};

loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // from transforma Promise em Observable
    return from(signInWithPopup(this.auth, provider)).pipe(
    // este operador pesca dentro do fluxo do pipe uma informação
    tap((user: UserCredential) => {

      console.log("Nosso result no Server.ts: ", user);
    this.routes.navigate(['/about']);
    }),
    catchError((e: AuthError) => {

//return of (e.message || 'Erro desconecido tente mais tarde');
    return throwError(() => new Error(e.message || 'Erro desconecido tente mais tarde'));
    }),
    );
};

}



