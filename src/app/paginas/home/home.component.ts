import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from '../../componentes/produtos/lista-produtos.component';
import { FeedbacksComponent } from '../../componentes/feedbacks/feedbacks.component';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';

@Component({
  selector: 'home-app',
  imports: [FormsModule, CabecalhoComponent, CommonModule, ListaProdutosComponent, FeedbacksComponent, RodapeComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}