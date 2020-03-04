"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const Rol_1 = __importDefault(require("./Rol"));
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {
}
exports.default = User;
User.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING,
    },
    imagen: {
        type: Sequelize.TEXT,
    },
    password: {
        type: Sequelize.TEXT,
    },
    rol: {
        type: Sequelize.INTEGER,
        references: {
            model: Rol_1.default,
            key: 'id'
        }
    }
}, { indexes: [{ unique: true, fields: ['correo'] }], sequelize: connection_1.default, modelName: 'sq_users' });
Rol_1.default.hasOne(User, { as: 'user' });
// User.belongsTo(Rol, {as: 'user_rol', foreignKey: 'id'})
// Phone.belongsTo(User, {as: "phone", foreignKey: 'id'})
// User.hasOne(Phone, {as: 'user_phone'})
