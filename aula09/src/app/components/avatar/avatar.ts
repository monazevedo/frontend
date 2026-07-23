import { Component, inject, input } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthStateService } from '../../service/auth-state';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  // Input com valor padrão
  localUserComponentFilho = input<User | null>(null);
  
  // Injeção de dependência
  private localService = inject(AuthStateService);

  // Método de logout
  logout(): void {
    this.localService.logout();
  }

  // Getter para verificar se está autenticado
  //get isAuthenticated(): boolean {
   // return this.localService.isAuthenticated();
 // }
}