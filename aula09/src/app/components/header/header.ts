import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

import { AuthStateService } from '../../service/auth-state';
import { Avatar } from '../avatar/avatar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Avatar, AsyncPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  protected localUser$: Observable<User | null>;

  constructor(private authStateService: AuthStateService) {
    this.localUser$ = this.authStateService.getUser();
  }
}