import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {
  minhaString: string = 'Paulo';
  minhaLista: string[] = [
    'Tony',
    'DATE_PIPE_DEFAULT_OPTIONS',
    'Maria',
    'Ana',
    'Clara',
    '1',
    'false',
    this.minhaString,
  ];


  //Minha lista de ANY, não +e comum usar o any, e ele deskiga o TypeScript
  minhaListaJS: any[] = ['Tony', 'DATE_PIPE_DEFAULT_OPTIONS', 'Maria', 'Ana', 'Clara', 1, false];

  /** Minha Lista () */
  //minhaListaJSNumer: number[] = ["Tony", "DATE_PIPE_DEFAULT_OPTIONS", "Maria", "Paulo", 'Ana', 'Clara',1, false]
}
