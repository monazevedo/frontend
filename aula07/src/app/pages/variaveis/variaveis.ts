import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {

nome="tony";
  localobjecto = { nome: 'tony', endereco: 'rua......', numero: 10, admin: false, lado: 'esquerdo'};
constructor(){
  console.log ("Minha variavel global Objecto no constructor: ", this.localobjecto);
  ///invocar  o construtor

  this.metodoTestConst();
  this.metodoTestLet();
  this.metodoTestLet2();
  this.metodoTestConst2();

}
metodoTestLet(){
  console.log ("Minha variavel global Objecto metodoTestLet: ", this.localobjecto);
  this.nome= "Rafael";
  console.log ("Minha variavel global nome metodoTestLet: ", this.localobjecto)
}

metodoTestConst(){
  console.log ("Minha variavel global Objecto metodoTestConst: ", this.localobjecto);
  this.nome= "Paulo";
   console.log ("Minha variavel global nome metodoTestConst: ", this.nome)
}

metodoTestConst2(){
  //var nome= 'tony';
  /// escopo local Não usa this.
 const localNome= "tony filho"
  const localNomeObjecto= {};
   const localNomeArray= [];
   console.log ("Minha variavel consyt localNome no metodoTestConst: ", localNome)
  // localNome= "ana"
  //localNomeObjecto={nome: "tony"};
  //localNomeArray=[1,2];

}

metodoTestLet2(){
  //var nome= 'tony';
  /// escopo local Não usa this.
 let localNome= "tony filho"
   console.log ("Minha variavel consyt localNome no metodoTestLet2: ", localNome)
   localNome= "Monica"
   console.log ("Minha variavel consyt localNome no metodoTestLet2: ", localNome)
}


}
