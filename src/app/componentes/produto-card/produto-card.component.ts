import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../interface/produto';
import { Credenciais } from '../../interface/credenciais';
import { AuthService } from '../../service/auth.service';
import { CarrinhoService } from '../../service/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'produto-card',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})

export class ProdutoIndividualComponent {
  @Input() produto!: Produto;

  usuarioSessionObject?: Credenciais;

  produtoInserido?: boolean;

  quantidadeProdutosUsuario?: number;

  constructor(private authService: AuthService, private carrinhoService: CarrinhoService, private router: Router) {}

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

  navegarParaProdutoDetalhado(): void {
    this.router.navigate([`/produto/${this.produto.id}`]);
  }
}