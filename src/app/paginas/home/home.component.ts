import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';


@Component({
  selector: 'home-app',
  imports: [FormsModule, CabecalhoComponent, CommonModule, RodapeComponent, RouterOutlet],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(10px)' })
        ], { optional: true }),
        query(':leave', [
          animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
        ], { optional: true }),
        query(':enter', [
          animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})

export class HomeComponent{

  escrollarParaTopo(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}