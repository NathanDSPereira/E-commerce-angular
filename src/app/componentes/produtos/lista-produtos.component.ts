import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoIndividualComponent } from '../produto-card/produto-card.component';
import { Produto, ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'lista-produtos-app',
  imports: [FormsModule, CommonModule, ProdutoIndividualComponent],
  standalone: true,
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})

export class ListaProdutosComponent implements OnInit{
  listaProdutos: Produto[] = [];
  hoverProdutos: boolean = false;

  constructor(private produtoService: ProdutoService) {}
 

  ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
    })
    console.log(this.listaProdutos);
  }

}