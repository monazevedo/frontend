import { Auth, AuthError, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, UserCredential } from 'firebase/auth';
import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, of, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
   logout(): void {
    this.auth.signOut()
      .then(() => {
        console.log('Usuário deslogado com sucesso');
        // O onAuthStateChanged vai atualizar o user$ automaticamente
        this.routes.navigate(['/welcome']);
      })
      .catch((error) => {
        console.error('Erro ao deslogar:', error);
      });
  }

  private auth = inject(FirebaseService).auth;
  private enviromentInjector = inject(EnvironmentInjector);
  private routes = inject(Router);

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
    // take() é o operador de dessubscrição
    take(1),
    // este operador pesca dentro do fluxo do pipe uma informação
    tap((user: UserCredential) => {
      console.log('Nosso result no Server.ts: ', user);
      this.routes.navigate(['/about']);
    }),
    // é o operador de captura de erro
    catchError((e: AuthError) => {
      // return of (e.message || 'Erro desconhecido tente mais tarde');
      return throwError(() => new Error(e.message || 'Erro desconhecido tente mais tarde'));
    }),
  );
};

}