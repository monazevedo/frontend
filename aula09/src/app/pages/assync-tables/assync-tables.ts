import { IUtilizador } from './../../shared/i-utilizador';
import { ChangeDetectorRef, Component } from '@angular/core';
import { catchError, Observable, of, switchMap, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';
import { subscribe } from 'firebase/data-connect';


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
  localUserSubscrition:IUtilizador[] = [];


  ///Criação das variaveis de erro
  errorPromise: LocalError = {errorAsync: false, errorNome: ""};
  errorAsyncAwaitPromise: LocalError = {errorAsync: false, errorNome: ""};
  errorObservable: LocalError = {errorAsync: false, errorNome: ""};
  localUserAsyncAwait: IUtilizador[] | undefined;
  errorAsyncAwait: { errorAsync: boolean; errorNome: string; } | undefined;

//falaremos sobre DI ou Injeção de Dependência
constructor(
    protected fakeBack: FakeBack,
    private cdr: ChangeDetectorRef,
) {
    this.localUserObservable$ = fakeBack.getUtilizadoresObservable();

    //invocando o metodo de promise
    this.carregarPromise();

    //invocando o 2º metodo de promise
    this.carregarAsyncAwaitPromise();

    this.carregarObservable();
    //this.cdr.detectChanges();
}



carregarPromise = () => {
  this.fakeBack
  .getUtilizadorsPromise()
  .then((result: IUtilizador[]) => {
    this.localUserPromise = result;
    // console.log('Nosso Result: ', this.localUserPromise);
    this.cdr.detectChanges();
    return this.localUserPromise;
  })
  .catch((e) => {
    // console.error('Nosso Error: ', e);
    this.errorPromise = { errorAsync: true, errorNome: 'Error no carregarPromise(): ' + e };
    this.localUserPromise = [];
  });
}


carregarAsyncAwaitPromise() {
    this.fakeBack
    .getUtilizadoresAsync()
    .then((res: IUtilizador[]) => {
    console.log('Nosso Result em carregarAsyncAwaitPromise(): ', res);
    this.localUserAsyncPromise = res;
    })
    .catch((error) => {
    console.error('Nosso Error em carregarAsyncAwaitPromise(): ', error);
    this.localUserAsyncPromise = [];
    this.errorAsyncAwaitPromise = {
    errorAsync: true,
    errorNome: 'Error no carregarAsyncAwaitPromise(): ' + error,
    };
    });
}

carregarObservable = () => {
  //falar um pouco sobre RxJS
  //operador take(1), este cara faz com que apos 1 subscrição o canal de dados seja fechado
  this.fakeBack.getUtilizadoresObservable().pipe(
    take(1),
    switchMap((res: IUtilizador[]) => {
    console.log('Nosso Result em carregarObservable(): ', res);
    this.localUserSubscrition = res;
    this.cdr.detectChanges();
    return this.localUserSubscrition;
    }),
    catchError((error) => {
    console.error('Nosso Error em carregarObservable(): ', error);
    this.errorObservable = { errorAsync: true, errorNome: "Erro no metodo carregarObservable: " + error };
    return of([]);
    }),
).subscribe({
  next: (result) => { console.log("nosso dado: ", result) },
  error: (e) => console.log("nosso Erro no metodo carregarObservableComSubscribeOObjeto()" + e),
  complete: () => console.log("nosso complete, terminou o Observable"),
});
};

} // endclass