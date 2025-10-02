import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  contatoForm: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      usuario: new FormControl(''),
      senha: new FormControl('')
    })
  }

  entrar(): void {
    console.log(this.contatoForm.value);
    
  }
}