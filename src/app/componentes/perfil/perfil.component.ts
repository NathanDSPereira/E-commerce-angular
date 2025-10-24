import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  dadosUsuarioString?: string | null;
  dadosUsuarioObjeto?: Credenciais;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.dadosUsuarioString = this.authService.getSessionStorage();
    console.log(this.dadosUsuarioString, ", type: ", typeof this.dadosUsuarioString)
  }
}
