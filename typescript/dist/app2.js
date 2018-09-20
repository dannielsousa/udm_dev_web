"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
/*--- Criar Carros ---*/
var carroA = new Carro_1.Carro('dodge', 4);
var carroB = new Carro_1.Carro('ferari', 4);
var carroC = new Carro_1.Carro('veloster', 3);
/*--- montar a lista de carros da concessionaria --*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('João Naves', listaDeCarros);
/*--- Exibir a lista de carros ---*/
//console.log(concessionaria.mostrarListaDeCarros());
/* --- Comprar o carro --- */
var pessoa = new Pessoa_1.Pessoa('Danniel', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }
});
console.log(pessoa.dizerCarroQueTem());
