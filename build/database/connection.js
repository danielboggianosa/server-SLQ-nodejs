"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const Sequelize = require('sequelize');
const sequelize = new Sequelize(keys_1.default.name, keys_1.default.user, keys_1.default.pass, keys_1.default.connection);
exports.default = sequelize;
