import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProdutosComponent } from '../produtos/produtos.component';
import { CategoriasCardComponent } from '../categorias-card-list/categorias-card.component';
import { FeedbacksComponent } from '../feedbacks/feedbacks.component';

@Component({
  selector: 'app-componentes',
  imports: [ProdutosComponent, CategoriasCardComponent, FeedbacksComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomePageComponent {

}
