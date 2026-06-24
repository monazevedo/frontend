import { Component } from '@angular/core';
import { IUser } from '../../shared/i-user';

type IUserLocal={id:number, nome: string, email:string};

@Component({
  selector: 'app-interfaces',
  imports: [],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.css',
})
export class Interfaces {


  user: IUser = { id: 1, nome: "tony", email: "tony@gmail.com"};
  user02: IUserLocal = { id: 1, nome: "tony", email: "tony@gmail.com"};

  constructor(){


    console.log("Minha Interface: ", this.user);
    console.log(`Minha Interface: ${this.user02}`);
  }
}
