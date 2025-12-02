import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'home-app',
  imports: [FormsModule, CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
}