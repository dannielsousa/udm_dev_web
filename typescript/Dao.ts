import { DaoInterface } from './DaoInterface';

export class Dao<T> implements DaoInterface<T> {

   nomeTabela: string = 'tb_pessoa';

    insterir(object: T): boolean {
        console.log('logica insert');
        return true;
    }

    atualizar(object: T): boolean {
        console.log('logica atualizar');
        return true;
    }
    remover(id: number): T{
        console.log('logica remover');
        return Object();
    }
    selecionar(id: number): T {
        console.log('logica selecionar');
        return Object();
    }
    selecionarTotos(): [T] {
        console.log('logica selecionarTotos');
        return [Object()];
    }
}