import { Auth } from 'firebase/auth';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  private auth= inject(FirebaseService).auth;
  private enviromentInjector= inject(EnvironmentInjector);
  private routes= inject(Router);

  private user$ =new BehaviorSubject< |null >(null);

}
