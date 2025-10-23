import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { NgxMaskDirective } from 'ngx-mask';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-registrar',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule, NgxMaskDirective],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  contatoForm: FormGroup;

  constructor(private route: Router, private authService: AuthService) {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      senha: new FormControl('', [Validators.required])
    })
  }

  registrar(): void {
    if(this.contatoForm.valid) {
      this.authService.verificaRegistrar(this.contatoForm.value)
      this.contatoForm.reset()
    } else {
      alert("Por favor, preencha todos os campos do formulário!")
    }
  }
}