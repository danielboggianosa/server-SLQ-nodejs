"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Models/User"));
const Sequelize = require('sequelize');
class UsersContuserler {
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield User_1.default.create(req.body
            // { include: [{
            //   model: Rol,
            //   as: 'user_rol',
            // }], }
            )
                .then((user) => {
                console.log("User creado con ID:", user.id);
                res.json({ msg: 'User creado exitosamente', data: user });
            })
                .catch((error) => {
                console.log('Hubo un error al crear el registro');
                if (error.errors.type === "unique_violation") {
                    res.json({ msg: 'Este correo ya se encuentra registrado' });
                }
                else {
                    res.json(error.errors.type);
                }
            });
        });
    }
    //READ ALL
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.findAll()
                .then((users) => {
                console.log("All users:", JSON.stringify(users, null, 4));
                res.json(users);
            });
        });
    }
    //READ 1
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield User_1.default.findOne({ where: { id: id } })
                .then((user) => {
                console.log("All users:", JSON.stringify(user, null, 4));
                res.json(user);
            });
        });
    }
    //UPDATE 1
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            yield User_1.default.update(body, {
                where: {
                    id: id
                }
            }).then((user) => {
                console.log("Done");
                res.json(user);
            });
        });
    }
    //DELETE 1
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield User_1.default.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                // console.log("Done");
                res.json({ message: 'User Successfully Deleted' });
            });
        });
    }
    // LISTAR CON PAGINADO
    getList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, size, field, order, value, attributes } = req.body;
            const { Op } = require('sequelize');
            // console.log(req.body);
            var where = null;
            if (value) {
                where = {
                    [Op.or]: [
                        { id: { [Op.substring]: value } },
                        { nombre: { [Op.substring]: value } },
                        { apellido: { [Op.substring]: value } },
                        { correo: { [Op.substring]: value } }
                    ]
                };
            }
            let total = yield User_1.default.count({ where });
            yield User_1.default.findAll({
                attributes: attributes,
                where,
                order: [[field, order]],
                offset: page,
                limit: size
            })
                .then((users) => {
                // console.log("All users:",total);
                res.json({ data: users, total: total });
            });
        });
    }
}
const usersContuserler = new UsersContuserler();
exports.default = usersContuserler;
