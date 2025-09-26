import { Component, ProviderToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../interface/produto';
import { Categoria } from '../../interface/categoria';
import { CategoriaService } from '../../service/categoria.service';
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

  opcaoMarcada!: boolean;

  todasAsCategorias: Categoria[] = [];
  categoriasSelecionadas: string[] = [];
  categoriaUnitariaSelecionada!: string;

  categoriaUrl: string = '';

  constructor(
    private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private route: ActivatedRoute
  ) {}
  
   ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.todosOsProdutos = data;

      this.listaProdutos = this.todosOsProdutos;

      this.route.queryParams.subscribe((params) => {
        this.categoriaUrl = params['categoria'];

        if(this.categoriaUrl) {
          this.categoriasSelecionadas = [];

          this.categoriasSelecionadas.push(this.categoriaUrl);          

          this.filtrarProduto();
        }
      })
    })

    this.categoriaService.getCategorias().subscribe((data) => {
      this.todasAsCategorias = data;
    })
    
  }
  
  selecionarProdutosCategoria(ev: any): void {
    this.opcaoMarcada = ev.target.checked;
  
    this.categoriaUnitariaSelecionada = ev.target.defaultValue;
    
    
    if(this.opcaoMarcada) {
      if(!this.categoriasSelecionadas.includes(this.categoriaUnitariaSelecionada)) {
        this.categoriasSelecionadas.push(this.categoriaUnitariaSelecionada);
      }
    } else {
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter((categoria) => categoria !== this.categoriaUnitariaSelecionada)
    }
    
    this.filtrarProduto();
  }
  
  filtrarProduto(): void {
    if(this.categoriasSelecionadas.length === 0) {
      this.listaProdutos = this.todosOsProdutos;
      return
    }

    this.listaProdutos = this.todosOsProdutos.filter((produto) => {
      return this.categoriasSelecionadas.includes(produto.categoria)
    });
  }

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}