import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../interface/produto';

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