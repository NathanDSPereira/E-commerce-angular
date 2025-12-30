import { Produto } from "./produto"

export interface Credenciais {
    nome: string,
    telefone: string,
    email: string,
    produtos?: Produto[],
    favoritos?: Produto[],
    token: string
}