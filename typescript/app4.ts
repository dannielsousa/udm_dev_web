//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from './ConessionariaDao';

import { Dao } from './Dao';
import { Concessionaria } from './Concessionaria';
import { Pessoa } from './Pessoa';

//let dao : ConcessionariaDao = new ConcessionariaDao(); 
//let dao2: PessoaDao = new PessoaDao();

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('','')

dao3.insterir(concessionaria);