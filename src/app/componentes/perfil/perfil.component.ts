import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  dadosUrl?: string | null
  dadosUsuarioArray?: Credenciais;

  quantidadeProdutosCarrinho?: number

  constructor(private authService: AuthService, private route: ActivatedRoute, private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.dadosUrl = params['dados'];

      if(this.dadosUrl) {
        this.dadosUsuarioArray = JSON.parse(this.dadosUrl)

        this.carrinhoService.quantidadeCarrinho.subscribe((quantidade) => {
          this.quantidadeProdutosCarrinho = quantidade;
        })
      }
    })
  
    console.log(this.dadosUsuarioArray, typeof this.dadosUsuarioArray)
  }

  deslogar(): void {
    this.authService.deslogar();
  }
}