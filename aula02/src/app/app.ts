import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagLinks } from "./tag-links/tag-links";
import { TagListas } from "./tag-listas/tag-listas";
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagLinks, TagListas, TagParagrafo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula02');
}
