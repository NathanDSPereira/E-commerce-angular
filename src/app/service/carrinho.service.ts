import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credenciais } from '../interface/credenciais';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  usuario?: Credenciais;

  private quantidadeUsuarioCarrinho = new BehaviorSubject<number>(0);
  quantidadeCarrinho = this.quantidadeUsuarioCarrinho.asObservable();

  constructor(private authService: AuthService) { 
    this.usuario = this.authService.pegarDadosUsuarioSessionStorage();
    
    if(this.usuario) {
      const quantidade = this.usuario.produtos?.length ?? 0

      this.quantidadeUsuarioCarrinho.next(quantidade)
    }
  }

  atualizarQuantidadeProdutos(novaQuantidade: number | undefined): void {
    if(typeof  novaQuantidade == 'number') this.quantidadeUsuarioCarrinho.next(novaQuantidade)
  }
}
