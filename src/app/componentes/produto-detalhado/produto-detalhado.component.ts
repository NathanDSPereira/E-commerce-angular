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

@Component({
  selector: 'app-produto-detalhado',
  imports: [CommonModule, FormsModule, ProdutosComponent],
  templateUrl: './produto-detalhado.component.html',
  styleUrl: './produto-detalhado.component.css'
})
export class ProdutoDetalhadoComponent implements OnInit {
  usuarioSessionObject?: Credenciais;

  produtoInserido?: boolean;

  quantidadeProdutosUsuario?: number;
  
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private authService: AuthService, private carrinhoService: CarrinhoService) {}

  produto!: Produto

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    console.log('ID do produto detalhado:', produtoId);

    this.produtoService.pegarProdutoPorId(Number(produtoId)).subscribe((produto) => {
      this.produto = produto;
      console.log('Produto detalhado carregado:', this.produto);
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
}
