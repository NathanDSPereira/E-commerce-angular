import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rodape',
  imports: [CommonModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  @Output() scrollar = new EventEmitter<void>();

  escrollarParaTopo(): void {
    this.scrollar.emit();
  }
}
