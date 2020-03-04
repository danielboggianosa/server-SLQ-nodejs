"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phone_controller_1 = __importDefault(require("../controllers/phone.controller"));
class PhonesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', phone_controller_1.default.create);
        this.router.get('/', phone_controller_1.default.list);
        this.router.get('/:id', phone_controller_1.default.getOne);
        this.router.delete('/:id', phone_controller_1.default.delete);
        this.router.put('/:id', phone_controller_1.default.update);
    }
}
const phonesRoutes = new PhonesRoutes();
exports.default = phonesRoutes.router;
