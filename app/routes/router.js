"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const modules_1 = __importDefault(require("../models/modules"));
const router = express_1.default.Router();
router.get('/', function (req, res) {
    res.render('pages/index', { resposta: {} });
});
router.post('/validate', function (req, res) {
    const form_info = {
        email: String(req.body.email),
        nome: String(req.body.nome),
        senha: String(req.body.senha),
        confirm_senha: String(req.body.confirm),
        endereco: String(req.body.endereco),
        mensagem: String(req.body.msg),
    };
    const resposta = {
        validacao: (0, modules_1.default)(form_info),
        mensagem: function () {
            if (this.validacao === true) {
                return 'Dados recebidos! Aguarde nosso contato.';
            }
            else {
                return 'Há erros no formulário. Por favor, tente novamente.';
            }
        }
    };
    console.log(form_info);
    console.log(resposta.validacao);
    res.render('pages/index', { resposta: resposta });
});
exports.default = router;
