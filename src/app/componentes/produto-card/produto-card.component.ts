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

  constructor(private router: Router) {}

  navegarParaProdutoDetalhado(): void {
    this.router.navigate([`/produto/${this.produto.id}`]);
  }
}