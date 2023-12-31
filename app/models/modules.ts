/** Função que realiza uma validação básica em campos de formulário
 * 
 * @param { Record<string, string> } form_info Objeto com os valores do formulário
 * 
 * @returns { boolean } Retorna true se os dados são válidos ou false caso haja algum erro ou informação inválida
 */
function validateForm (form_info: Record<string, string>): boolean {
    for (let info in form_info) {
        if (info === undefined || info === ''){
            console.log(info, 'vazio');
            return false;
        }
    }

    if (form_info.senha !== form_info.confirm_senha || form_info.senha.length < 8) {
        console.log('Erro de senha');
        return false;
    }

    return true;
}
/**Tipo de dado para armazenar a resposta do servidor */
export type Resposta = {
    validacao: boolean;
    mensagem: () => string;
};

export default validateForm;