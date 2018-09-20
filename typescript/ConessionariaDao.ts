import { Concessionaria } from './Concessionaria';
import { DaoInterface } from './DaoInterface';

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';

    insterir(object: Concessionaria): boolean {
        console.log('logica insert');
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica atualizar');
        return true;
    }
    remover(id: number): Concessionaria{
        console.log('logica remover');
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria {
        console.log('logica selecionar');
        return new Concessionaria('', []);
    }
    selecionarTotos(): [Concessionaria] {
        console.log('logica selecionarTotos');
        return [new Concessionaria('', [])];
    }
}