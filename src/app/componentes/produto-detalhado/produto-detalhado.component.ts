import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../interface/produto';

@Component({
  selector: 'app-produto-detalhado',
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-detalhado.component.html',
  styleUrl: './produto-detalhado.component.css'
})
export class ProdutoDetalhadoComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {}

  produto!: Produto

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    console.log('ID do produto detalhado:', produtoId);

    this.produtoService.pegarProdutoPorId(Number(produtoId)).subscribe((produto) => {
      this.produto = produto;
      console.log('Produto detalhado carregado:', this.produto);
    });
  }
}
