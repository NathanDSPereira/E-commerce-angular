import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credenciais } from '../interface/credenciais';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  usuario?: Credenciais;

  private quantidadeUsuarioCarrinho = new BehaviorSubject<number>(0);
  quantidadeCarrinho = this.quantidadeUsuarioCarrinho.asObservable();

  private quantidadeUsuarioFavoritos = new BehaviorSubject<number>(0);
  quantidadeFavoritos = this.quantidadeUsuarioFavoritos.asObservable();

  constructor() {}
 
  atualizarQuantidadeProdutos(novaQuantidade: number | undefined): void {
    if(typeof  novaQuantidade == 'number') this.quantidadeUsuarioCarrinho.next(novaQuantidade)
  }

  atualizarQuantidadeFavoritos(novaQuantidade: number | undefined): void {
    if(typeof  novaQuantidade == 'number') this.quantidadeUsuarioFavoritos.next(novaQuantidade)
  }
}
