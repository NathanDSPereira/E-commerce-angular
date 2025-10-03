import { Injectable } from '@angular/core';
import { Credenciais } from '../interface/credenciais';
import { delay, Observable, of, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly token_chave = 'auth_token';
  private usuario_teste: string = 'usuario@exemplo.com';
  private senha_teste: string = 'senha_teste';
  usuarioValido?: boolean;
  private tokenExemploValido?: string;

  constructor() { }
  
  logar(dadosUsuario: Credenciais): Observable<{token: string}> {
    this.usuarioValido = dadosUsuario.email == this.usuario_teste &&
        dadosUsuario.senha == this.senha_teste;
    
    if(this.usuarioValido) {
      this.tokenExemploValido = 'JWT.SIMULADO.TOKEN-PARA-PORTFOLIO123';

      return of({token: this.tokenExemploValido}).pipe(
        delay(800),
        tap((response) => {
          this.setToken(response.token);
        })
      )
    } else {
      return new Observable( obs => {
        obs.error("Credênciais inválidas. Tente 'usuario@exemplo.com' e 'senha_teste'")
      });
    }
  }
  

  private setToken(token: string):void {
    localStorage.setItem(this.token_chave, token);
  }

  deslogar(): void {
    localStorage.removeItem(this.token_chave);
  }

  getToken(): string | null {
    return localStorage.getItem(this.token_chave);
  }
}