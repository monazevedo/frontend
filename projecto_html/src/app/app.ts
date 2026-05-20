import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Contacto } from "./contacto/contacto";
import { Home } from "./home/home";
import { Receitas } from "./receitas/receitas";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Contacto, Home, Receitas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projecto_html');
}
