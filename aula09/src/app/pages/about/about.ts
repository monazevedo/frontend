import { AuthStateService } from './../../service/auth-state';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  user$: Observable<User | null>;
isLoading = true;
currentYear = new Date().getFullYear();


 constructor(private AuthService: AuthStateService) {   
   this.user$ = this.AuthService.getUser();  
  }
 
 ngOnInit(): void {
    // Simula carregamento dos dados
    this.user$.subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
  
  getInitials(user: User | null): string {
    if (!user) return '?';
    if (user.displayName) {
    const names = user.displayName.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return user.email ? user.email[0].toUpperCase() : '?';
}
  }


