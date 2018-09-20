"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = (function () {
    function Dao() {
        this.nomeTabela = 'tb_pessoa';
    }
    Dao.prototype.insterir = function (object) {
        console.log('logica insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return Object();
    };
    Dao.prototype.selecionarTotos = function () {
        console.log('logica selecionarTotos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
