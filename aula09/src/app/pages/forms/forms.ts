
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../../service/auth-state';
import { UserCredential, AuthError } from 'firebase/auth';

@Component({
  selector: 'app-forms',
  /**um novo módulo - o módulo para formulários - ReactiveFormsModule */
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {


  /**Variavel para receber criar Formulario e capturar os dados */
  protected signInForms: UntypedFormGroup;

  

  constructor(
    protected authService: AuthStateService,
    protected router: Router,
    private fb: UntypedFormBuilder,
  ) {
    this.signInForms = this.fb.nonNullable.group({
      email: ["",[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  } //end construtor


onSubmit() {
if(!this.signInForms.valid){
  this.signInForms.pending;
  /**Aprendendo a mudar a rota pelo TS(typescript) */
  this.router.navigateByUrl("/");
}

const localFormEmail = this.signInForms.get("email")?.value;
const localFormPassword = this.signInForms.get("password")?.value;
const localFormsComplete = this.signInForms.value;
console.log(`Dados do formulário passados individualmente: Email: ${localFormEmail} e Password: ${localFormPassword}`);
console.log(`Objeto: formulário completo ${JSON.stringify(localFormsComplete)}`);

}//end onsubmit


goBack = () => {
  this.signInForms.reset();
   /**Aprendendo a mudar a rota pelo TS(typescript) */
  this.router.navigateByUrl("/");

} //end goback

gmailAuthentication() {
  this.authService.loginWithGoogle().subscribe({
    next: (res: UserCredential) => console.log("Meu result from Firebase Authentication", res),
    error: (e: AuthError) => {
      console.error("nosso erro do firebase auth", e);
      this.goBack();
    }
  });
}}
