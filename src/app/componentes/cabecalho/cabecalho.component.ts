import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';

@Component({
  selector: 'cabecalho-app',
  imports: [FormsModule, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent implements OnInit {

  dadosUsuarioLogado?: string | null;
  dadosUsuarioLogadoArray?: Credenciais;
  produtosNoCarrinho!: number | undefined;
  constructor(private navegar: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.estaLogado()) {
      this.dadosUsuarioLogado = this.authService.getSessionStorage();
      if (this.dadosUsuarioLogado) {
        this.dadosUsuarioLogadoArray = JSON.parse(this.dadosUsuarioLogado);
      }
    }
    this.produtosNoCarrinho = this.dadosUsuarioLogadoArray?.produtos?.length;
    console.log(this.produtosNoCarrinho)
  }

  verificarSeEstaLogado(): boolean {

    if(this.authService.estaLogado()) return true

    return false;
  }
}