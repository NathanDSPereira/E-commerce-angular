import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


export interface Produto {
    titulo: string,
    descricao: string,
    imagemUrl: string,
    preco: number,
    adicionarNoCarrinho: boolean,
    hover: boolean
}

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    produtos!: Produto[];
    constructor(private http: HttpClient) {}


    getProducts(): Observable<Produto[]> {
       return this.http.get<Produto[]>('assets/data/produtos.json');
    }
}