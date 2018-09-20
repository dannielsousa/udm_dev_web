"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.insterir = function (object) {
        console.log('logica insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionarTotos = function () {
        console.log('logica selecionarTotos');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
