import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../interface/produto";
import { AuthService } from "./auth.service";
import { Credenciais } from "../interface/credenciais";
import { CarrinhoService } from "./carrinho.service";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    produtos!: Produto[];
    usuarioSessionObject?: Credenciais;

    produtoInserido?: boolean;
    produtoFavorito?: boolean;

    quantidadeProdutosUsuario?: number;
    quantidadeFavoritosUsuario?: number;

    constructor(private http: HttpClient, private authService: AuthService, private carrinhoService: CarrinhoService) {}


    getProducts(): Observable<Produto[]> {
        return this.http.get<Produto[]>('assets/data/produtos.json');
    }

    pegarProdutoPorId(id: number): Observable<Produto> {
        return this.getProducts().pipe(
            map((produtos: Produto[]) => produtos.find(produto => produto.id === id) as Produto)
        ); 
    }

    verificarProdutoIncluso(produto: Produto): boolean {
        if(!this.authService.pegarDadosUsuarioSessionStorage()) return false

        this.usuarioSessionObject = this.authService.pegarDadosUsuarioSessionStorage();
        
        this.produtoInserido = this.usuarioSessionObject?.produtos?.some((produtoIncluso) => {
        return Number(produtoIncluso.id) === Number(produto.id)
        })

        if(this.produtoInserido) {
        return true
        }

        return false;
  }

    salvarProduto(produtoNovo: Produto): void {
        this.usuarioSessionObject?.produtos?.push(produtoNovo);
        this.authService.atualizarUsuarioSessionStorage(this.usuarioSessionObject)

        this.quantidadeProdutosUsuario = this.usuarioSessionObject?.produtos?.length;
        this.carrinhoService.atualizarQuantidadeProdutos(this.quantidadeProdutosUsuario)

        alert("Produto adicionado ao carrinho!")
    }

    verificarProdutoFavorito(produto: Produto): boolean {
        if(!this.authService.pegarDadosUsuarioSessionStorage()) return false
    
        this.usuarioSessionObject = this.authService.pegarDadosUsuarioSessionStorage();

        this.produtoFavorito = this.usuarioSessionObject?.favoritos?.some((produtoFavorito) => {
            return Number(produtoFavorito.id) === Number(produto.id);
        });

        if(this.produtoFavorito) {
            return true;
        }

        return false;
    }

    salvarProdutoFavorito(produtoFavorito: Produto): void {
        this.usuarioSessionObject?.favoritos?.push(produtoFavorito);
        this.authService.atualizarUsuarioSessionStorage(this.usuarioSessionObject);

        this.quantidadeFavoritosUsuario = this.usuarioSessionObject?.favoritos?.length;
        this.carrinhoService.atualizarQuantidadeFavoritos(this.quantidadeFavoritosUsuario);

        alert("Produto adicionado aos favoritos!");
    }   
}