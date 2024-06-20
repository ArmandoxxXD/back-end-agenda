"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendaControllers_1 = __importDefault(require("../controllers/agendaControllers"));
class AgendaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', agendaControllers_1.default.list);
        this.router.post('/', agendaControllers_1.default.create);
        this.router.delete('/:id', agendaControllers_1.default.delete);
        this.router.put('/:id', agendaControllers_1.default.update);
        this.router.get('/:id', agendaControllers_1.default.getOne);
    }
}
const agendaRoutes = new AgendaRoutes();
exports.default = agendaRoutes.router;
