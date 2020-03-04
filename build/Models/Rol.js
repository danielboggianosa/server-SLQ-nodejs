"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Rol extends Model {
}
exports.default = Rol;
Rol.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { indexes: [{ unique: true, fields: ['name'] }], sequelize: connection_1.default, modelName: 'sq_rols' });
