import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cabecalho-app',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent {


  constructor(private navegar: Router) {}

  redirecionar(): void {
    this.navegar.navigate(['/home'])
  }
}
