import sequelize from '../database/connection';
import User from './User';
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

export default class Rol extends Model {}
Rol.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{ indexes: [ { unique: true, fields: [ 'name'] }], sequelize, modelName: 'sq_rols' }
)

