import sequelize from '../database/connection';
import Rol from '../models/Rol';
import Phone from './Phone';
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

Rol.hasOne(User, {as: 'user'})
// User.belongsTo(Rol, {as: 'user_rol', foreignKey: 'id'})
// Phone.belongsTo(User, {as: "phone", foreignKey: 'id'})
// User.hasOne(Phone, {as: 'user_phone'})