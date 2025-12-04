import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';

@Component({
  selector: 'app-carrinho-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho-item.component.html',
  styleUrl: './carrinho-item.component.css'
})
export class CarrinhoItemComponent {
  @Input() carrinhoItem!: Produto;
  @Output() excluirProdutoCarrinho = new EventEmitter<number>();

  excluirProduto(): void {
    this.excluirProdutoCarrinho.emit(this.carrinhoItem.id);
  }
}
