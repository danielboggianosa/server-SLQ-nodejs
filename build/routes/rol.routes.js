"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = __importDefault(require("../controllers/rol.controller"));
class RolsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', rol_controller_1.default.create);
        this.router.get('/', rol_controller_1.default.list);
        this.router.get('/:id', rol_controller_1.default.getOne);
        this.router.delete('/:id', rol_controller_1.default.delete);
        this.router.put('/:id', rol_controller_1.default.update);
    }
}
const rolsRoutes = new RolsRoutes();
exports.default = rolsRoutes.router;
