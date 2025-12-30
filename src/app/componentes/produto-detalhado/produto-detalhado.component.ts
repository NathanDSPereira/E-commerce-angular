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
  usuarioSessionObject?: Credenciais;

  produtoInserido?: boolean;
  produtoFavorito?: boolean;

  quantidadeProdutosUsuario?: number;
  quantidadeFavoritosUsuario?: number;
  
  produto!: Produto

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

    if(this.verificarProdutoIncluso(this.produto)) {
      alert("Produto já incluso no carrinho!")
      return;
    }
    
    this.salvarProduto(this.produto);
  }

  verificarProdutoIncluso(produto: Produto): boolean {
    if(!this.authService.pegarDadosUsuarioSessionStorage()) return false

    this.usuarioSessionObject = this.authService.pegarDadosUsuarioSessionStorage();
      
    this.produtoInserido = this.usuarioSessionObject?.produtos?.some((produtoIncluso) => {
      return Number(produtoIncluso.id) === Number(produto.id)
    })

    if(this.produtoInserido) {
      console.log('produto já incluso no carrinho')
      return true
    }

    this.produto.adicionadoNoCarrinho = true;
    return false;
  }

  salvarProduto(produtoNovo: Produto): void {
    this.usuarioSessionObject?.produtos?.push(produtoNovo);
    this.authService.atualizarUsuarioSessionStorage(this.usuarioSessionObject)
    
    this.quantidadeProdutosUsuario = this.usuarioSessionObject?.produtos?.length;
    this.carrinhoService.atualizarQuantidadeProdutos(this.quantidadeProdutosUsuario)

    alert("Produto adicionado ao carrinho!")
  }

  adicionarAosFavoritos(): void {
    this.produto.favoritado = !this.produto.favoritado;
  }
}
