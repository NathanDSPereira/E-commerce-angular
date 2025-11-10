import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../interface/produto';
import { Credenciais } from '../../interface/credenciais';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'produto-card',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})

export class ProdutoIndividualComponent{
  @Input() produto!: Produto;
  usuarioDadosString?: string | null;
  usuarioDadosObject?: Credenciais;

  constructor(private authService: AuthService) {}

  comprar(): void {
    console.log(this.produto)
    if(this.pegarDadosUsuario()) {
      console.log(this.usuarioDadosObject);
      this.usuarioDadosObject?.produtos?.push(this.produto)
      //enviar os dados do sectionstorage para lá de volta só que atualizado
    }
  }

  pegarDadosUsuario(): Credenciais | false {
    this.usuarioDadosString = this.authService.getSessionStorage
    ()
    if(this.usuarioDadosString == null) {
      return false
    } else {
      return this.usuarioDadosObject = JSON.parse(this.usuarioDadosString);
    }
  }
}