import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaEstaticas02 } from "./tabela-estaticas02/tabela-estaticas02";
import { FormularioEstatico } from "./formulario-estatico/formulario-estatico";
import { TabelaEstaticas01 } from "./tabela-estaticas01/tabela-estaticas01";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelaEstaticas02, FormularioEstatico, TabelaEstaticas01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula04');
}
