"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDao = (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.insterir = function (object) {
        console.log('logica insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionarTotos = function () {
        console.log('logica selecionarTotos');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
