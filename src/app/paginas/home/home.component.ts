import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'home-app',
  imports: [FormsModule, CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent{
}