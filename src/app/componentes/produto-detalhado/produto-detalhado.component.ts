import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../interface/produto';
import { AuthService } from '../../service/auth.service';
import { CarrinhoService } from '../../service/carrinho.service';
import { Credenciais } from '../../interface/credenciais';
import { ProdutosComponent } from '../produtos/produtos.component';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto-detalhado',
  imports: [CommonModule, FormsModule, ProdutosComponent, RouterModule],
  templateUrl: './produto-detalhado.component.html',
  styleUrl: './produto-detalhado.component.css'
})
export class ProdutoDetalhadoComponent implements OnInit {
  produto!: Produto
  produtoFavoritado!: boolean;
  
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private authService: AuthService, private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');

        return this.produtoService.pegarProdutoPorId(id ? Number(id) : 0)
      })
    ).subscribe({
      next: (produto) => {
        this.produto = produto;
        this.produtoFavoritado = produto.favoritado;
      },
      error: (err) => {
        console.error('Erro ao carregar o produto detalhado:', err);
      }
    });
  }


  comprar(): void {
    if(!this.authService.estaLogado()) {
      alert("Por favor, esteja logado para comprar");
      return
    }

    if(this.produtoService.verificarProdutoIncluso(this.produto)) {
      alert("Produto já incluso no carrinho!")
      return;
    }

    this.produto.adicionadoNoCarrinho = true;
    this.produtoService.salvarProduto(this.produto);
  }

  adicionarAosFavoritos(): void {
    if(!this.authService.estaLogado()) {
      alert("Por favor, esteja logado para adicionar aos favoritos");
      return
    }

    if(this.produtoService.verificarProdutoFavorito(this.produto)) {
      alert("Produto já adicionado aos favoritos!")
      return;
    }

    this.produto.favoritado = true;
    this.produtoService.salvarProdutoFavorito(this.produto);
  }
}
