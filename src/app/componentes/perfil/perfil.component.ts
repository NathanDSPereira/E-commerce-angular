import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  usuarioLogado?: Usuario;

  constructor(private authService: AuthService) {}

}
