export interface DaoInterface<T> {
    
    nomeTabela: string;

    insterir(object: T): boolean;
    atualizar(object: T): boolean;
    remover(id: number): T;
    selecionar(id: number): T;
    selecionarTotos(): [T];

}