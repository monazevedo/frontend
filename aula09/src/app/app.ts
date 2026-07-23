import { AuthStateService } from './service/auth-state';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
   constructor(private authStateService: AuthStateService) {}
    ngOnInit(): void {
    this.authStateService.initAuthListener();
  
 
      this.authStateService.getUser().subscribe({
    next: (result) => {
    console.log('Nosso Resulto do Google no App.ts: ', result);
    },
    error: (error) => {
    console.error('Nosso Error no Auth gdo Firebase no App.ts: ', error);
    },
    complete: () => {
    console.log('Observable Finalizado no App.ts.');
    }
    });
    }


}