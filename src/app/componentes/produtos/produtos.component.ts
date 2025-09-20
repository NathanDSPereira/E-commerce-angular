import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoIndividualComponent } from '../produto-card/produto-card.component';
import { Produto, ProdutoService } from '../../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-produtos-app',
  imports: [FormsModule, CommonModule, ProdutoIndividualComponent],
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent implements OnInit{
  listaProdutos: Produto[] = [];
  hoverProdutos: boolean = false;

  constructor(private produtoService: ProdutoService, private navegar: Router) {}
 
  redirecionar(): void {
    this.navegar.navigate(['/produtos'])
  }

  ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
    })
    console.log(this.listaProdutos);
  }

}