import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Credenciais } from '../../interface/credenciais';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  dadosUrl?: string | null
  dadosUsuarioArray?: Credenciais;

  constructor(private authService: AuthService, private route: ActivatedRoute, router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.dadosUrl = params['dados'];

      if(this.dadosUrl) {
        this.dadosUsuarioArray = JSON.parse(this.dadosUrl)
      }
    })
  
    console.log(this.dadosUsuarioArray, typeof this.dadosUsuarioArray)
  }

    deslogar(): void {
      this.authService.deslogar();
    }
}