import { Injectable } from '@angular/core';
import { delay, Observable, of, tap, windowCount } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { Credenciais } from '../interface/credenciais';
import { CarrinhoService } from './carrinho.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly db_users = 'db_users'
  private readonly chave_user = 'auth_user'

  private listaUsuariosArray: Usuario[] = [];
  dadosJSON?: string | null;

  usuarioJaCadastrado?: Usuario;
  usuarioCadastradoNoLocalStorage?: Usuario;
  usuarioSessionStorage?: Credenciais;
  usuarioDadosString?: string | null;

  usuarioEncontrado?: number;

  private tokenExemploValido?: string;

  constructor(private carrinhoService: CarrinhoService) { 
    window.addEventListener("beforeunload", () => {
      this.atualizarProdutosNoLocalStorage();
    })

  }

  verificaLogin(credenciais: Usuario): Observable<Credenciais> {
    this.listaUsuariosArray = this.obterTodosOsUsuariosLocalStorage();

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
          this.carrinhoService.atualizarQuantidadeProdutos(response.produtos?.length ?? 0);
        })
      )
    } else {
      return new Observable( obs => {
        obs.error("Credenciais erradas ou usuario não encontrado!")
      })
    }
  }

  verificaRegistrar(usuario: Usuario): void {
    this.listaUsuariosArray = this.obterTodosOsUsuariosLocalStorage();
    
    if(this.listaUsuariosArray) {
      this.usuarioJaCadastrado = this.listaUsuariosArray.find(user => user.email == usuario.email)
      if(this.usuarioJaCadastrado) {
        console.log("Usuário já cadastrado");
        alert("Usuário já cadastrado com esse e-mail")
        return
      } else {
        usuario.produtos = [];
        this.salvarNovoUsuarioLocalStorage(usuario);
        alert("Usuário cadastrado com sucesso!");
        return
      }
    }
  }
  
  atualizarProdutosNoLocalStorage(): void {
    this.usuarioSessionStorage = this.pegarDadosUsuarioSessionStorage();
    this.listaUsuariosArray = this.obterTodosOsUsuariosLocalStorage();

    this.usuarioEncontrado = this.listaUsuariosArray.findIndex(user =>
      user.email == this.usuarioSessionStorage?.email
    );

    if(this.usuarioEncontrado !== -1) {
      this.listaUsuariosArray[this.usuarioEncontrado].produtos = this.usuarioSessionStorage?.produtos ?? [];
    }

    this.setLocalStorage(this.listaUsuariosArray)
  }

  atualizarUsuarioSessionStorage(usuarioNovo: Credenciais | undefined): void {
    if(usuarioNovo != undefined) {
      this.setSessionStorage(usuarioNovo)
    }
  }

  private salvarNovoUsuarioLocalStorage(novoUsuario: Usuario): void {
    this.listaUsuariosArray = this.obterTodosOsUsuariosLocalStorage();

    this.listaUsuariosArray.push(novoUsuario)

    this.setLocalStorage(this.listaUsuariosArray);
  }

  obterTodosOsUsuariosLocalStorage(): Usuario[] {
    this.dadosJSON = this.getLocalStorage();

    if(!this.dadosJSON) {
      return [];
    } else {
      return JSON.parse(this.dadosJSON) as Usuario[]
    }
  }

  pegarDadosUsuarioSessionStorage(): Credenciais | undefined {
    this.usuarioDadosString = this.getSessionStorage();

    if(!this.usuarioDadosString) return undefined

    return JSON.parse(this.usuarioDadosString)
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
    this.atualizarProdutosNoLocalStorage();
    sessionStorage.removeItem(this.chave_user);
  }

  getLocalStorage(): string | null {
    return localStorage.getItem(this.db_users);
  }

  private setLocalStorage(users: Usuario[]): void {
    localStorage.setItem(this.db_users, JSON.stringify(users));
  }
}