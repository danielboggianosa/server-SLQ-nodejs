"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const db_setup = connection_1.default.sync()
    .then((res) => console.log('Se crearon todas las tablas con éxito'))
    .catch((res) => console.log('Ocurrió algún error al crear las tablas'));
;
exports.default = db_setup;
