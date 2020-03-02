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
const Rol_1 = __importDefault(require("../Models/Rol"));
class RolsController {
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield Rol_1.default.create(req.body)
                .then((rol) => {
                console.log("Rol creado con ID:", rol.id);
                res.json({ msg: 'Rol creado exitosamente', data: rol });
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
            yield Rol_1.default.findAll()
                .then((rols) => {
                console.log("All rols:", JSON.stringify(rols, null, 4));
                res.json(rols);
            });
        });
    }
    //READ 1
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Rol_1.default.findOne({ where: { id: id } })
                .then((rol) => {
                console.log("All rols:", JSON.stringify(rol, null, 4));
                res.json(rol);
            });
        });
    }
    //UPDATE 1
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            yield Rol_1.default.update(body, {
                where: {
                    id: id
                }
            }).then((rol) => {
                console.log("Done");
                res.json(rol);
            });
        });
    }
    //DELETE 1
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Rol_1.default.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                console.log("Done");
                res.json('hecho');
            });
        });
    }
}
const rolsController = new RolsController();
exports.default = rolsController;
