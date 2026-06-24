import { Component } from '@angular/core';
import { IAnimal } from '../../shared/i-animal';

@Component({
  selector: 'app-poo',
  imports: [],
  templateUrl: './poo.html',
  styleUrl: './poo.css',
})
export class Poo implements IAnimal OnInit{
  nome:string;

  makeSound(): void {
    console.log("Já tenho som");
  }

  ngOnInit(): void{

    this.makeSound();
  }
}
