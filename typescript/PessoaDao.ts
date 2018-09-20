import { Pessoa } from './Pessoa';
import { DaoInterface } from './DaoInterface';

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa';

    insterir(object: Pessoa): boolean {
        console.log('logica insert');
        return true;
    }

    atualizar(object: Pessoa): boolean {
        console.log('logica atualizar');
        return true;
    }
    remover(id: number): Pessoa{
        console.log('logica remover');
        return new Pessoa('', '');
    }
    selecionar(id: number): Pessoa {
        console.log('logica selecionar');
        return new Pessoa('', '');
    }
    selecionarTotos(): [Pessoa] {
        console.log('logica selecionarTotos');
        return [new Pessoa('', '')];
    }
}