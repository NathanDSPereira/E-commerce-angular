import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';

import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';
import { CarrinhoItemComponent } from "../../componentes/carrinho-item/carrinho-item.component";

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, FormsModule, CarrinhoItemComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  carrinhoLista: Produto[] | undefined = [];
  usuarioLogado?: Credenciais;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.pegarDadosUsuarioSessionStorage();

    if(this.usuarioLogado) {
      this.carrinhoLista = this.usuarioLogado?.produtos;
    } else {
      return
    }
  }
}
