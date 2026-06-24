import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit{

  numeroDaCasa: number |string | undefined | null;
  numeroDaLoja: string;

  constructor(){
    this.numeroDaCasa=1;
    this.numeroDaLoja="1";
  }

  ngOnInit(): void {
    const leoNumber: number = this.numeroDaCasa as number;
    this.numeroDaCasa=this.numeroDaLoja;
    console.log("Nosso numero: " + leoNumber)
  }
}
