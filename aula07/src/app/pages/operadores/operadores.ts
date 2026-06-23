import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {

  ///aritmeticos
  localAritemeticos : string = "+, -,*,/,%";

  ///Operadores de comparação
  localComparacao : string= "==, ===, !=, !==, >,<,>=, <=";


  locallogicos: string = "&&, ||, ??";

///Operador Ternario

  localTernario: string = "localname=this.cursos ? 'Curso Java' : 'curso de Js' ";

  localAtribuicao: string = "=, +=,-=";
  constructor(){
    let exemploNumber=10;
    exemploNumber +=20

    let localTernario= exemploNumber ? 50 : 100;
    //ternario permite fazer pré-validação, exemplo abaixo onde se na variavel for igual ao valor 30, eu faço a atribuiçai do valor 50, senão eu faço valor 100.
    let localTernario2= exemploNumber ===30 ? 50 : 100;
  }


}
