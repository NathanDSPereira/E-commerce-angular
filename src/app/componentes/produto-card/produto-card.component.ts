import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../service/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'produto-card',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})

export class ProdutoIndividualComponent{
  @Input() produto!: Produto;
}