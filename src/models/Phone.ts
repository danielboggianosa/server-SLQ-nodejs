import sequelize from '../database/connection';
import User from '../models/User';
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

export default class Phone extends Model {}
Phone.init({
    codigo: {
        type: Sequelize.STRING,
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user:{
        type: Sequelize.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    }
},
{ sequelize, modelName: 'sq_phones' }
)