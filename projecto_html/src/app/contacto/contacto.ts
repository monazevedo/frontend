import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nome = '';
  email = '';
  senha = '';

  enviar() {
    
    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }
  
}
