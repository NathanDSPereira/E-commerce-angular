export interface Produto {
    id: number;
    titulo: string,
    descricao: string,
    imagemUrl: string,
    preco: number,
    adicionadoNoCarrinho: boolean,
    favoritado: boolean,
    hover: boolean,
    categoria: string
}