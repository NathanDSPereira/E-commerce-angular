import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { getLocaleCurrencyCode } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly db_users = 'db_users'
  private readonly chave_user = 'auth_user'

  private listaUsuarios: Usuario[] = [];
  dadosJSON?: string | null;

  private usuario_teste: string = 'usuario@exemplo.com';
  private senha_teste: string = 'senha_teste';
  
  usuarioValido?: boolean;
  private tokenExemploValido?: string;

  constructor() { }
  
  // verificaLocalStorage(dadosUsuario: Usuario): Observable<{token: string}> {
  //   // this.getUsersDB();
    
  //   console.log(this.getLocalStorage());
  //   console.log(this.listaUsuarios);
    
  //   this.listaUsuarios.map((usuario) => {console.log(usuario)});
    
    
  //   this.usuarioValido = true
    
  //   if(this.usuarioValido) {
  //     this.tokenExemploValido = 'JWT.SIMULADO.TOKEN-PARA-PORTFOLIO123';

  //     return of({token: this.tokenExemploValido}).pipe(
  //       delay(800),
  //       tap((response) => {
  //         this.setSessionStorage(response.token);
  //       })
  //     )
  //   } else {
  //     return new Observable( obs => {
  //       obs.error("Credênciais inválidas. Tente 'usuario@exemplo.com' e 'senha_teste'")
  //     });
  //   }
  // }

  //a função verificaLocalStorage deve apenas verificar se aquele usuário já existe no localStorage

  verificaUsuarioLocalStorage(usuario: Usuario): void {
    this.dadosJSON = this.getLocalStorage();

    if(this.dadosJSON == null) {
      this.listaUsuarios = [];
      this.setLocalStorage(usuario)
    } else {
      this.listaUsuarios = JSON.parse(this.dadosJSON);
      console.log("salve, tem registro");
    }

    console.log(this.getLocalStorage());
    
  }
  
  private setSessionStorage(token: string):void {
    sessionStorage.setItem(this.chave_user, token);
  }

  getSessionStorage(): string | null {
    return sessionStorage.getItem(this.chave_user);
  }
  
  estaLogado(): boolean {
    return !!this.getSessionStorage();
  }

  deslogar(): void {
    sessionStorage.removeItem(this.chave_user);
  }

  getLocalStorage(): string | null {
    return localStorage.getItem(this.db_users);
  }

  private setLocalStorage(user: Usuario): void {
    localStorage.setItem(this.db_users, JSON.stringify(user));
  }
}