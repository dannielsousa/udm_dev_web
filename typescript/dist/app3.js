"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Moto_1 = require("./Moto");
var Carro_1 = require("./Carro");
var carro = new Carro_1.Carro('Veloster', 3);
var moto = new Moto_1.Moto();
var concessionaria = new Concessionaria_1.Concessionaria('', []);
console.log(concessionaria.fornecerHorariosDefuncionamento());
