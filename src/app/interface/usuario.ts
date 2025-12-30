import { Produto } from "./produto";

export interface Usuario {
    nome: string,
    email: string,
    telefone: string,
    produtos?: Produto[],
    favoritos?: Produto[],
    senha: string
}