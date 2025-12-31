import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-total-carrinho-compra',
  imports: [CommonModule, FormsModule],
  templateUrl: './total-carrinho-compra.component.html',
  styleUrl: './total-carrinho-compra.component.css'
})
export class TotalCarrinhoCompraComponent implements OnInit {
  quantidadeProdutos!: number;
  @Input() totalAPagar: number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.quantidadeProdutos = this.authService.pegarDadosUsuarioSessionStorage()?.produtos?.length ?? 0
  }

}
