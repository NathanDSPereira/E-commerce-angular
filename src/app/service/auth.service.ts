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

  usuarioValido?: Usuario;
  usuarioCadastradoNoLocalStorage?: Usuario;
  usuarioSessionStorage?: Credenciais;

  private tokenExemploValido?: string;

  constructor() { }

  //a função verificaLocalStorage deve apenas verificar se aquele usuário já existe no localStorage

  verificaLogin(credenciais: Usuario): Observable<Credenciais> {
    this.listaUsuariosArray = this.obterTodosOsUsuarios();

    this.usuarioCadastradoNoLocalStorage = this.listaUsuariosArray.find((user) => user.email == credenciais.email && user.senha == credenciais.senha);

    if(this.usuarioCadastradoNoLocalStorage) {
      this.tokenExemploValido = 'JWT.SIMULADO.TOKEN-PARA-PORTFOLIO123'
      
      this.usuarioSessionStorage = {
        nome: this.usuarioCadastradoNoLocalStorage.nome, 
        telefone: this.usuarioCadastradoNoLocalStorage.telefone, 
        email: this.usuarioCadastradoNoLocalStorage.email,
        produtos: this.usuarioCadastradoNoLocalStorage.produtos,
        token: this.tokenExemploValido
      }
      return of (this.usuarioSessionStorage).pipe(
        delay(800),
        tap((response) => {
          this.setSessionStorage(response)
        })
      )
    } else {
      return new Observable( obs => {
        obs.error("Credenciais erradas!")
      })
    }

  }

  verificaRegistrar(usuario: Usuario): void {
    this.listaUsuariosArray = this.obterTodosOsUsuarios();
    
    if(this.listaUsuariosArray) {
      this.usuarioValido = this.listaUsuariosArray.find(user => user.email == usuario.email)
      if(this.usuarioValido) {
        console.log("Usuário já cadastrado");
        alert("Usuário já cadastrado com esse e-mail")
        return
      } else {
        usuario.produtos = [];
        this.salvarNovoUsuario(usuario);
        alert("Usuário cadastrado com sucesso!");
        return
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
      return JSON.parse(JSON.parse(this.dadosJSON)) as Usuario[]
    }
  }




  private setSessionStorage(user_inf: Credenciais):void {
    sessionStorage.setItem(this.chave_user, JSON.stringify(user_inf));
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