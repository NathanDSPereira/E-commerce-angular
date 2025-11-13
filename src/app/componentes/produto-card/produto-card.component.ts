import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../interface/produto';
import { Credenciais } from '../../interface/credenciais';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'produto-card',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})

export class ProdutoIndividualComponent {
  @Input() produto!: Produto;

  usuarioDadosString?: string | null;
  usuarioDadosObject?: Credenciais;

  produtoInserido?: boolean;

  constructor(private authService: AuthService) {}

  comprar(): void {
    if(!this.authService.estaLogado()) {
      alert("Por favor, esteja logado para comprar");
      return
    }

    if(this.verificarProdutoIncluso(this.produto)) {
      alert("Produto já incluso no carrinho!")
      return;
    }
    
    this.salvarProdutoComprar(this.produto);
  }

  verificarProdutoIncluso(produto: Produto): boolean {
    if(!this.pegarDadosUsuario()) return false      
      
    this.produtoInserido = this.usuarioDadosObject?.produtos?.some((produtoIncluso) => {
      return Number(produtoIncluso.adicionadoNoCarrinho) === Number(produto.adicionadoNoCarrinho)
    })

    if(this.produtoInserido) {
      console.log('produto já incluso no carrinho')
      return true
    }

    this.produto.adicionadoNoCarrinho = true;
    return false;
  }

  pegarDadosUsuario(): Credenciais | boolean {
    this.usuarioDadosString = this.authService.getSessionStorage();
    if(this.usuarioDadosString != null) {
      return this.usuarioDadosObject = JSON.parse(this.usuarioDadosString)
    } else {
      return false
    }
  }

  salvarProdutoComprar(produtoNovo: Produto): void {
    this.usuarioDadosObject?.produtos?.push(produtoNovo);
    this.authService.salvarUsuarioComProdutosAtualizados(this.usuarioDadosObject)
  }
}