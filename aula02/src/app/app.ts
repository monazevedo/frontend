import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagFormatacao } from "./tag-formatacao/tag-formatacao";
import { TagLinks } from "./tag-links/tag-links";
import { TagListas } from "./tag-listas/tag-listas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagFormatacao, TagLinks, TagListas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula02');
}
