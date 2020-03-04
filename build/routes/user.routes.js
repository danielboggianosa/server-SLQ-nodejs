"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', user_controller_1.default.create);
        this.router.post('/get', user_controller_1.default.getList);
        this.router.get('/', user_controller_1.default.list);
        this.router.get('/:id', user_controller_1.default.getOne);
        this.router.delete('/:id', user_controller_1.default.delete);
        this.router.put('/:id', user_controller_1.default.update);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
