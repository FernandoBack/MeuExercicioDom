// Olá, Devs! Este é o seu espaço para o exercício!

// Sua tarefa é fazer a imagem mudar ao clicar nos botões.

// 1. Seleciona a imagem principal pelo ID 'imagemExibida'
const imagemPrincipal = document.getElementById('imagemExibida');

// 2. Seleciona todos os botões dentro da div com a classe 'botoes-troca'
const botoesMiniatura = document.querySelectorAll('.botoes-troca .botao-miniatura');

// 3. Para cada botão, adiciona um 'event listener' que escuta o clique
botoesMiniatura.forEach(botao => {
  botao.addEventListener('click', () => {
    // 4. Pega o valor do atributo 'data-src' do botão clicado
    const novaSrc = botao.getAttribute('data-src');

    // 5. Atualiza o atributo 'src' da imagem principal com esse novo valor
    imagemPrincipal.setAttribute('src', novaSrc);
  });
});

// Boa sorte e divirtam-se com o DOM!