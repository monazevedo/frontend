import { Component } from '@angular/core';
import { User } from 'firebase/auth';
/*
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 constructor(private authService: AuthService) {   
   this.user$ = this.authService.getUser();  
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


*/