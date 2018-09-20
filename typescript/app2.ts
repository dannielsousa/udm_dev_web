import { Concessionaria } from './Concessionaria';
import { Carro } from './Carro';
import { Pessoa } from './Pessoa';




/*--- Criar Carros ---*/
let carroA = new Carro('dodge', 4);
let carroB = new Carro('ferari', 4);
let carroC = new Carro('veloster', 3);

/*--- montar a lista de carros da concessionaria --*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('João Naves', listaDeCarros);


/*--- Exibir a lista de carros ---*/
//console.log(concessionaria.mostrarListaDeCarros());

/* --- Comprar o carro --- */
let pessoa = new Pessoa('Danniel', 'veloster');


concessionaria.mostrarListaDeCarros().map( (carro: Carro) => {
    
    if (carro['modelo'] === pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }   

});

console.log(pessoa.dizerCarroQueTem());
