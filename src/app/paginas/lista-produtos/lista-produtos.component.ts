import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../interface/produto';
import { ProdutoIndividualComponent } from '../../componentes/produto-card/produto-card.component';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule,  FormsModule, ProdutoIndividualComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {

  listaProdutos!: Produto[];
  listaProdutosCategoria!: Produto[];

  constructor(private produtoService: ProdutoService) {}
  

   ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
    })
    console.log(this.listaProdutos);
  }

  selecionarProdutosCategoria(categoria: any): void {
    
  }


  mostraralerta(ev:  any): void {
    alert("sarvee")
    console.log(ev.target.id)
    console.log(ev);
    
    this.listaProdutosCategoria = this.listaProdutos.filter(produto => {
      return produto.categoria == ev;
    })
    console.log(this.listaProdutosCategoria);
    
  }

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
