import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../interface/produto";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    produtos!: Produto[];
    constructor(private http: HttpClient) {}


    getProducts(): Observable<Produto[]> {
        return this.http.get<Produto[]>('assets/data/produtos.json');
    }

    pegarProdutoPorId(id: number): Observable<Produto> {
        return this.http.get<Produto>(`assets/data/produtos/${id}.json`);
    }
}