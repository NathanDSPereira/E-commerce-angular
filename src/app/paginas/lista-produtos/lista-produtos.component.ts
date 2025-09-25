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
  categoriaSelecionada: string = '';
  produtoIgualCategoria!: boolean;
  opcaoMarcada!: boolean;
  produtoIncluido!: boolean;

  constructor(private produtoService: ProdutoService) {}
  

   ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
      this.todosOsProdutos = data;
    })
  }

  selecionarProdutosCategoria(categoria: any): void {
    
  }


  mostraralerta(ev: any): void {
    this.categoriaSelecionada = ev.target.defaultValue;
    this.opcaoMarcada = ev.target.checked;

    if(this.opcaoMarcada) {
      this.listaProdutos.filter(produto => {
        this.produtoIgualCategoria = produto.categoria.toLowerCase().trim() == this.categoriaSelecionada;
              
        if(this.produtoIgualCategoria) {
            this.produtosComCategoriaSelecionada.filter(produtoCategoria => {
            this.produtoIncluido = produtoCategoria.id == produto.id;
            
            
          })          
          // if(this.verificaProdutoIncluido(produto)) {
          //   return  
          // } else {
          //   this.produtosComCategoriaSelecionada.push(produto);
          // }
          // this.listaProdutos = this.produtosComCategoriaSelecionada;
        }
      })
    } else {
      this.listaProdutos = this.todosOsProdutos;
    }
  }
  
  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
