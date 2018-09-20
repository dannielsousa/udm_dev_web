import { Concessionaria } from './Concessionaria';
import { Moto } from './Moto';
import { Carro } from './Carro';

let carro = new Carro('Veloster', 3);

let moto = new Moto();

let concessionaria = new Concessionaria('', []);
console.log(concessionaria.fornecerHorariosDefuncionamento());