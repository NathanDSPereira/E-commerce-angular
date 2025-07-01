import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from '../../componentes/produtos/lista-produtos.component';

@Component({
  selector: 'home-app',
  imports: [FormsModule, CabecalhoComponent, CommonModule, ListaProdutosComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{
}