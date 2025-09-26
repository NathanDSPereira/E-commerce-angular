import { Component, ProviderToken } from '@angular/core';
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
  todosOsProdutos!: Produto[];
  produtosComCategoriaSelecionada: Produto[] = [];

  opcaoMarcada!: boolean;

  todasAsCategorias: string[] = [];
  categoriasSelecionadas: string[] = [];

  constructor(private produtoService: ProdutoService) {}
  

   ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.todosOsProdutos = data;

      this.listaProdutos = this.todosOsProdutos;
    })
  }

  selecionarProdutosCategoria(categoria: any): void {
    
  }


  mostraralerta(ev: any): void {

  //buscar as categorias do json, fazendo com um service, depois verificar se opção está marcada
  //depois incluir no novo array os produtos que tiverem a ou as categorias selecionadas,
  //então preciso saber quais categorias o usuário selecionou
  }
  
  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
