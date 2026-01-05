import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './favoritos-item.component.html',
  styleUrl: './favoritos-item.component.css'
})
export class FavoritosItemComponent {
  @Input() favoritosItem!: Produto;
  @Output() excluirProdutoFavorito = new EventEmitter<number>();

  constructor(private router: Router) { }

  excluirFavorito(): void {
    this.excluirProdutoFavorito.emit(this.favoritosItem.id);
  }

  navegarParaProdutoDetalhado(): void {
    this.router.navigate([`/produto/${this.favoritosItem.id}`]);
  }
}
