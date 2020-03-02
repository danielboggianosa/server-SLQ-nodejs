import sequelize from '../database/connection';
import Rol from './Rol';
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

export default class User extends Model {}
User.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
    },
    correo:{
        type: Sequelize.STRING,
    },
    imagen:{
        type: Sequelize.TEXT,
    },
    password:{
        type: Sequelize.TEXT,
    },
    rol:{
        type: Sequelize.INTEGER,
        references:{
            model: Rol,
            key: 'id'
        }
    }
},
{ indexes: [ { unique: true, fields: [ 'correo'] }], sequelize, modelName: 'sq_users' }
)

Rol.hasOne(User, {as: 'rol', foreignKey: 'rol'})