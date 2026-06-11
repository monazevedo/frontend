import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';



type meuObjecto={nome:string, endereco:string, numero: number, admin:boolean};
@Component({
  selector: 'app-tipos-de-dados',
  imports: [CommonModule],
  templateUrl: './tipos-de-dados.html',
  styleUrl: './tipos-de-dados.css',
})
export class TiposDeDados implements OnInit {

  localString: "meu texto" = "meu texto";///tipo string ///tipo char 'y'
  localNumber: 100 = 100; /// tipo numero/// long,bglong, int, inteiro....
  localBollean: boolean = false; /// tipo boolean
  localArray: string[]= ["Leo", "Evaldina",'Monica'];
  locallocalArray2: number[]= new Array (1,2,3);
  localNull: null=null;
  localNull2!: null;
  localUndefined: undefined= undefined;
  localUndefined2?: undefined;
  localobjecto = { nome: 'tony', endereco: 'rua......', numero: 10, admin: false, lado: 'esquerdo'};
  localobjecto2: meuObjecto= { nome: 'tony', endereco: 'rua......', numero: 10, admin: false, lado: 'esquerdo'};

/** tipo de dados assyncronos */

localPromisse: Promise <string> =new Promise <string> ((resolve, reject) => {
  if (resolve){
    resolve ("Aula de Assincronos em Promisse");
  }

  reject('Error Http 400')
});


localObservable$ = new Observable (a => a.next("Aula de assincronos"));
localObservable2$: Observable<string> =of("Aula de assincronos");

   /** construtor do Js */
   constructor (){

    this.localPromisse.then((result) => 
    console.log(' ********minha variavel promisse com Them', result),
   );

    //this.localObservable$.subscribe(data => console.log ("minha variavel de observable com subscribe", data));
  

    console.log("Minha variavel de string: " + this.localString);
    console.log("Minha variavel de Number: " + this.localNumber); 
    console.log("Minha variavel de Bollean: " + this.localBollean);
    console.log("Minha variavel de Arra: " + this.localArray);
    console.log("Minha variavel de Null: " + this.localNull);
    console.log("Minha variavel de Undefined: " + this.localUndefined);
    //console.log("Minha variavel de Promisse sem pending: " + this.localPromisse);
    //console.log("Minha variavel de Observable: sem Subscribe " + this.localObservable$);
    console.log("Minha variavel do tipo objecto: ", this.localobjecto2);
    console.log("Minha variavel do tipo objecto.nome: ", this.localobjecto2.nome);
    console.log("Minha variavel do tipo objecto.endereco: ", this.localobjecto2['endereco']);
    console.log("Minha variavel do tipo objecto.numero: ", this.localobjecto2.numero);
    console.log("Minha variavel do tipo objecto.admin: ", this.localobjecto2['admin']);

   }



  ngOnInit(): void {
    this.localObservable2$.subscribe((data)=>

      console.log(' minha variavel de observable com subcribe', data as string)
);
   this.localObservable2$.subscribe({
    next: (result)=> console.log('Nosso 2 Observable: ' + result),
    error: (e)=> console.log('Error do Observable: ' + e),
    complete: ()=> console.log('Observable completo: '),

   });


  }
  
  




}
