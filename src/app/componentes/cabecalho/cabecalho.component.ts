import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'cabecalho-app',
  imports: [FormsModule, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent {

  constructor(private navegar: Router, private authService: AuthService) {}

  verificarSeEstaLogado(): boolean {
    if(this.authService.estaLogado()) {
      return true;
    } else {
      return false;
    }
  }
}
