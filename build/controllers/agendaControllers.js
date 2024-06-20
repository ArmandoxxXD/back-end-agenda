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
const database_1 = __importDefault(require("../database"));
class AgendaController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const notas = yield database_1.default.query('SELECT * FROM notas');
            resp.json(notas);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO notas set ?', [req.body]);
            resp.json({ message: 'Nota guardada' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM notas WHERE id = ?', [id]);
            resp.json({ message: 'La nota se elimino' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE notas set ? WHERE id = ?', [req.body, id]);
            resp.json({ message: 'La nota se actualizo' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // se recupera el id de request params.
            const notas = yield database_1.default.query('SELECT * FROM notas WHERE id = ?', [id]);
            if (notas.length > 0) {
                return resp.json(notas[0]);
            }
            resp.status(404).json({ text: 'La nota no existe' });
        });
    }
}
const agendaController = new AgendaController();
exports.default = agendaController;
