const botaoMensagem = document.querySelector('#botao-mensagem');
const mensagem = document.querySelector('#mensagem');

botaoMensagem.addEventListener('click', () => {
    mensagem.textContent = 'Seja bem-vindo(a) à minha página!';
});