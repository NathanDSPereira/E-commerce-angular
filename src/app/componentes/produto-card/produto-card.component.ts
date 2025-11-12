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
    if(this.authService.estaLogado()) {
      if(!this.verificarProdutoIncluso(this.produto)) {
        this.salvarProdutoComprar(this.produto);
        console.log(this.usuarioDadosObject);
      } else {
        alert("Produto já incluso");
        return
      };
    } else {
      alert("Por favor, esteja logado para conseguir comprar!")
    }
  }

  verificarProdutoIncluso(produto: Produto): boolean {
    if(this.pegarDadosUsuario()) {
      this.produtoInserido = this.usuarioDadosObject?.produtos?.some((produtoAntigo => {produtoAntigo.id == produto.id}))
      console.log(this.produtoInserido);
      
      if(this.produtoInserido) {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
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