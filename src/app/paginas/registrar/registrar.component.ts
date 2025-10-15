import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-registrar',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule, NgxMaskDirective],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  contatoForm: FormGroup;

  constructor(private route: Router) {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      senha: new FormControl('', [Validators.required])
    })
  }

  registrar(): void {

    this.route.navigate(['/login'])
  }

  validarTelefone(): void {

  }
}