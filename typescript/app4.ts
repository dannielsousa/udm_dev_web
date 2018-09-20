import { PessoaDao } from './PessoaDao';
import { Concessionaria } from './Concessionaria';
import { ConcessionariaDao } from './ConessionariaDao';
import { Pessoa } from './Pessoa';

let dao : ConcessionariaDao = new ConcessionariaDao(); 
let concessionaria = new Concessionaria('', []);

dao.insterir(concessionaria);

let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('','');

dao2.atualizar(pessoa);