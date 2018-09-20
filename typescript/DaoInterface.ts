export interface DaoInterface {
    
    nomeTabela: string;

    insterir(object: any): boolean;
    atualizar(object: any): boolean;
    remover(id: number): any;
    selecionar(id: number): any;
    selecionarTotos(): [any];

}