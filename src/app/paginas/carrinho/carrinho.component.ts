import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';

import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';
import { CarrinhoItemComponent } from "../../componentes/carrinho-item/carrinho-item.component";
import { TotalCarrinhoCompraComponent } from "../../componentes/total-carrinho-compra/total-carrinho-compra.component";

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, FormsModule, CarrinhoItemComponent, TotalCarrinhoCompraComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  carrinhoLista: Produto[] | undefined = [];
  usuarioLogado?: Credenciais;

  totalAPagarProdutos:number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.pegarDadosUsuarioSessionStorage();

    if(this.usuarioLogado) {
      this.carrinhoLista = this.usuarioLogado?.produtos;
      this.somaPrecosProdutos();
    } else {
      return
    }
  }

  somaPrecosProdutos(): void {
    this.carrinhoLista?.forEach((itemLista) => {
      // this.totalAPagarProdutos += itemLista.preco;
      console.log(this.totalAPagarProdutos += itemLista.preco)
    })
  }
}
