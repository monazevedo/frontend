import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estruturas-de-controles',
  imports: [],
  templateUrl: './estruturas-de-controles.html',
  styleUrl: './estruturas-de-controles.css',
})
export class EstruturasDeControles implements OnInit{
idade: number=18;

constructor(){
//this.idade=+10;
console.log("variavel idade: ?", this.idade);
if (this.idade >=18){
  console.log("Idade é maior  que 18", this.idade);
}else{
  console.log("Idade é menor  que 18", this.idade);
}
}


/// 1 dos construtores 
ngOnInit(): void {


  this.exemploIfElse();
}
  exemploIfElse=() => {
   if (this.idade >=18){
  console.log("Idade é maior  que 18", this.idade);
}else{
  //linha 35 não executa
  console.log("Idade é menor  que 18", this.idade);
}
  }
}

