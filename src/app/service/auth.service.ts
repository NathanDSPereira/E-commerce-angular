import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { Credenciais } from '../interface/credenciais';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly db_users = 'db_users'
  private readonly chave_user = 'auth_user'

  private listaUsuariosArray: Usuario[] = [];
  private listaUsuariosString: string = '';
  dadosJSON?: string | null;

  private usuario_teste: string = 'usuario@exemplo.com';
  private senha_teste: string = 'senha_teste';
  
  usuarioValido?: Usuario;
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

  verificaLogin(credenciais: Credenciais): void {
  }

  verificaRegistrar(usuario: Usuario): void {
    this.listaUsuariosArray = this.obterTodosOsUsuarios();


    if(this.listaUsuariosArray) {
      this.usuarioValido = this.listaUsuariosArray.find(user => user.email == usuario.email)
      
      if(this.usuarioValido) {
        console.log("Usuário já cadastrado");
      } else {
        this.salvarNovoUsuario(usuario);
      }
    }
  }

  private salvarNovoUsuario(novoUsuario: Usuario): void {
    this.listaUsuariosArray = this.obterTodosOsUsuarios();

    this.listaUsuariosArray.push(novoUsuario)
    this.listaUsuariosString = JSON.stringify(this.listaUsuariosArray);

    this.setLocalStorage(this.listaUsuariosString);
  }

  obterTodosOsUsuarios(): Usuario[] {
    this.dadosJSON = this.getLocalStorage();

    if(this.dadosJSON == null) {
      return [];
    } else {
      return JSON.parse(this.dadosJSON) as Usuario[]
    }
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

  private setLocalStorage(users: String): void {
    localStorage.setItem(this.db_users, JSON.stringify(users));
  }
}