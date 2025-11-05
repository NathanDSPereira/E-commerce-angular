import { Produto } from "./produto";

export interface Usuario {
    nome: string,
    email: string,
    telefone: string,
    produtos?: Produto[],
    senha: string
}