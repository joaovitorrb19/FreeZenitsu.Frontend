import { Categoria } from "./categoria"

export interface Produto {
    id : number,
    nome : string,
    categoriaId : number,
    nomeImagem : string,
    categoria:Categoria,
    preco : string
}
