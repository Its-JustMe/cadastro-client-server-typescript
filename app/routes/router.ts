import express, { Request, Response, Router } from 'express';
import validateForm from '../models/modules';

const router: Router = express.Router();

router.get('/', function (req: Request, res: Response): void {
    res.render('pages/index', { resposta: {} });
});

router.post('/validate', function (req: Request, res: Response): void {
    const form_info: Record<string, string> = {
        email: String(req.body.email),
        nome: String(req.body.nome),

        senha: String(req.body.senha),
        confirm_senha: String(req.body.confirm),

        endereco: String(req.body.endereco),
        mensagem: String(req.body.msg),
    };
      

    const resposta = {
        validacao: validateForm(form_info),
        mensagem: function () {
            if (this.validacao === true) {
                return 'Dados recebidos! Aguarde nosso contato.';
            } else {
                return 'Há erros no formulário. Por favor, tente novamente.'
            }
        }
    };
    console.log(form_info);

    console.log(resposta.validacao);

    res.render('pages/index', { resposta: resposta });
})

export default router;