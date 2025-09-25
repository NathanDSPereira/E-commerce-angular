export interface Produto {
    id: number;
    titulo: string,
    descricao: string,
    imagemUrl: string,
    preco: number,
    adicionarNoCarrinho: boolean,
    hover: boolean,
    categoria: string
}