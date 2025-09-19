import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from '../../componentes/produtos/produtos.component';
import { FeedbacksComponent } from '../../componentes/feedbacks/feedbacks.component';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoriasCardComponent } from '../../componentes/categorias-card-list/categorias-card.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'home-app',
  imports: [FormsModule, CabecalhoComponent, CommonModule, ProdutosComponent, FeedbacksComponent, RodapeComponent, CategoriasCardComponent, RouterOutlet],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}