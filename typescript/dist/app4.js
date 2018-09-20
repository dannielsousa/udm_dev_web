"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConessionariaDao_1 = require("./ConessionariaDao");
var dao = new ConessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1.Concessionaria('', []);
dao.insterir(concessionaria);
