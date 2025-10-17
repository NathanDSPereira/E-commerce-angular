import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  contatoForm: FormGroup;
  mensagemErro?: string;

  constructor(private authService: AuthService, private route: Router) {
    this.contatoForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  // entrar(): void {
  //   if(this.contatoForm.valid) {
  //     this.authService.verificaUsuarioLocalStorage(this.contatoForm.value).subscribe({
  //       next: (response) => {
  //         this.route.navigate(['/home']);
  //       },
  //       error: (response) => {
  //         this.mensagemErro = response;
  //       }
  //     });
  //   } else {
  //     this.mensagemErro = 'Por favor, preencha o login!'
  //   }
  // }
  entrar(): void {
    if(this.contatoForm.valid) {
      this.authService.verificaUsuarioLocalStorage(this.contatoForm.value);      
    }
  }
}