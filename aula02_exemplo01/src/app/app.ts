import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagsH } from "./tags-h/tags-h";
import { TagFormatacao } from "./tag-formatacao/tag-formatacao";
import { TagListas } from "./tag-listas/tag-listas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagParagrafo, TagsH, TagFormatacao, TagListas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula02_exemplo01');
}
