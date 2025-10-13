import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NOMEM } from 'dns';


@Component({
  selector: 'app-registrar',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  contatoForm: FormGroup;

  constructor(private route: Router) {
    this.contatoForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
      senha: new FormControl('')
    })
  }

  registrar(): void {

    this.route.navigate(['/login'])
  }
}