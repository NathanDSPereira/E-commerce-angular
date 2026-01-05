import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';
import { Credenciais } from '../../interface/credenciais';
import { AuthService } from '../../service/auth.service';
import { FavoritosItemComponent } from "../../componentes/favoritos-item/favoritos-item.component";
import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, FormsModule, FavoritosItemComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {

  favoritosLista: Produto[] | undefined = [];
  usuarioLogado?: Credenciais;

  indice!: number;
  
  constructor(private authService: AuthService, private carrinho: CarrinhoService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.pegarDadosUsuarioSessionStorage();

    if(this.usuarioLogado) {
      this.favoritosLista = this.usuarioLogado?.favoritos;
    } else {
      return
    }
  }

  excluirProdutoFavorito(idProduto: number): void {
    alert(`Produto removido dos favoritos com sucesso!`);

    const indice = this.favoritosLista?.findIndex((item) => item.id === idProduto);

    if (indice !== undefined && indice > -1 && this.favoritosLista) {
      this.favoritosLista.splice(indice, 1);
      if (this.usuarioLogado) { 
        this.usuarioLogado.favoritos = this.favoritosLista;
        
        this.authService.atualizarUsuarioSessionStorage(this.usuarioLogado);
      }

      this.carrinho.atualizarQuantidadeFavoritos(this.favoritosLista.length);
    }
  }
}