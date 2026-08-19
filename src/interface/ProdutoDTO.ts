export interface ProdutoDTO {
  id_categoria?: number;
  nome_produto: string;
  codigo_produto: number;
  descricao: string;
  preco: number;
  quantidade_estoque: number;
  quantidade_minima: number;
  ativo: boolean;
  status: string;
}

