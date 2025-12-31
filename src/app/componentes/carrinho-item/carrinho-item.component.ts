import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../interface/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho-item.component.html',
  styleUrl: './carrinho-item.component.css'
})
export class CarrinhoItemComponent {
  @Input() carrinhoItem!: Produto;
  @Output() excluirProdutoCarrinho = new EventEmitter<number>();

  constructor(private router: Router) {}

  excluirProduto(): void {
    this.excluirProdutoCarrinho.emit(this.carrinhoItem.id);
  }

  navegarParaProdutoDetalhado(): void {
    this.router.navigate([`/produto/${this.carrinhoItem.id}`]);
  }
}
