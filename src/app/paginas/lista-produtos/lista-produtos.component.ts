import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Produto, ProdutoService } from '../../service/produto.service';
import { ProdutoIndividualComponent } from '../../componentes/produto-card/produto-card.component';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule,  FormsModule, ProdutoIndividualComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {

  listaProdutos!: Produto[]; 

  constructor(private produtoService: ProdutoService) {}
  

   ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
    })
    console.log(this.listaProdutos);
  }

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
