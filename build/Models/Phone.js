"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const User_1 = __importDefault(require("../models/User"));
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Phone extends Model {
}
exports.default = Phone;
Phone.init({
    codigo: {
        type: Sequelize.STRING,
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.INTEGER,
        references: {
            model: User_1.default,
            key: 'id'
        }
    }
}, { sequelize: connection_1.default, modelName: 'sq_phones' });
