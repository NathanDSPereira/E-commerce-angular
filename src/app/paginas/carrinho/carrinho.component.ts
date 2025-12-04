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

  indice!: number;

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
      this.totalAPagarProdutos += itemLista.preco;
    })
  }

  excluirProdutoCarrinho(produtoId: number): void {
    alert(`Produto removido do carrinho com sucesso!`);

    const indice = this.carrinhoLista?.findIndex((item) => item.id === produtoId);

    if (indice !== undefined && indice > -1 && this.carrinhoLista) {
      this.carrinhoLista.splice(indice, 1);
      if (this.usuarioLogado) { 
        this.usuarioLogado.produtos = this.carrinhoLista;

        this.authService.atualizarUsuarioSessionStorage(this.usuarioLogado);
      }

      this.totalAPagarProdutos = 0;
      this.somaPrecosProdutos();
    } 

  }
}
