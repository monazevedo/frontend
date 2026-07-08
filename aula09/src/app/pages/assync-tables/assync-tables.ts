import { Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';


type LocalError={errorAsync: boolean, errorNome: string};

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {

///Utilizar Promisse/then&catch
  localUserPromise: IUtilizador[]=[];

  ///Utilizar com asyn await
  localUserAsyncPromise: IUtilizador[]=[];


  ///Utilizar Observable
  localUserObservable$!:  Observable <IUtilizador[]>;


  ///Criação das variaveis de erro
  errorPromise: LocalError = {errorAsync: false, errorNome: ""};
  errorAsyncAwaitPromise: LocalError = {errorAsync: false, errorNome: ""};
  errorObservable: LocalError = {errorAsync: false, errorNome: ""};
  localUserAsyncAwait: IUtilizador[] | undefined;
  errorAsyncAwait: { errorAsync: boolean; errorNome: string; } | undefined;

//falaremos sobre DI ou Injeção de Dependência
constructor(protected fakeBack: FakeBack) {
    this.localUserObservable$ = fakeBack.getUtilizadoresObservable();
    this.carregarPromise();
}



carregarPromise = () => {
    this.fakeBack
    .getUtilizadorsPromise()
    .then((res: IUtilizador[]) => {
    console.log('Nosso Result: ', res);
    return (this.localUserAsyncPromise = res);
    })
    .catch((e) => {
    console.error('Nosso Error: ', e);
    this.errorPromise = {errorAsync: true, errorNome: "Error no carregarPromise(): " + e};
    this.localUserPromise= [];
    });
};

carregarAsyncAwaitPromise = async () => {
    /*try {
        const res = await this.fakeBack.getUtilizadorsPromise();
        console.log('Nosso Result: ', res);
        this.localUserAsyncAwait = res;
    } catch (e) {
        console.error('Nosso Error: ', e);
        this.errorAsyncAwait = {errorAsync: true, errorNome: "Error no carregarAsyncAwaitPromise(): " + e};
    }*/
};

carregarObservable = () => {
    /*this.fakeBack
    .getUtilizadoresObservable()
    .subscribe({
        next: (res: IUtilizador[]) => {
            console.log('Nosso Result: ', res);
            this.localUserObservable$ = res;
        },
        error: (e) => {
            console.error('Nosso Error: ', e);
            this.errorObservable = {errorAsync: true, errorNome: "Error no carregarObservable(): " + e};
        }
    });*/
};

}
