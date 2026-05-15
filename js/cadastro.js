// Seleciona o primeiro formulário encontrado na página
const frm = document.querySelector("form");

// Adiciona um evento de envio (submit) ao formulário
frm.addEventListener('submit',(e) => {

    // Impede o recarregamento automático da página
    e.preventDefault();

    // Captura o valor digitado no campo de nome
    const nome = document.getElementById("inName").value;

    // Captura o valor digitado no campo de e-mail
    const email = document.getElementById("inEmail").value;

    // Captura o valor digitado no campo de senha
    const senha = document.getElementById("inSenha").value;

    // Captura o valor digitado no campo de confirmação de senha
    const confirmaSenha = document.getElementById("inConfirmaSenha").value;
    
    // Variável usada para controlar se o formulário é válido
    let valido = true;

    // Verifica se o campo nome está vazio
    if (nome === "") {

        // Exibe mensagem de erro para o nome
        document.getElementById("erro-name").textContent = "Erro - Insira um nome completo";

        // Define o formulário como inválido
        valido = false;

    } else {

        // Remove a mensagem de erro caso o nome esteja correto
        document.getElementById("erro-name").textContent = "";
    }

    // Verifica se o e-mail está vazio ou não contém "@"
    if (email === "" || !email.includes("@")) {

        // Exibe mensagem de erro no campo de e-mail
        document.getElementById("erro-email").textContent = "Erro - E-mail inválido";

        // Define o formulário como inválido
        valido = false;

    } else {

        // Remove a mensagem de erro caso o e-mail esteja correto
        document.getElementById("erro-email").textContent = "";
    }
    
    // Verifica se a senha possui menos de 6 caracteres
    if (senha.length < 6) {

        // Exibe mensagem de erro para senha curta
        document.getElementById("erro-senha").textContent = "Erro - Insira no minimo 6 caracteres";

        // Define o formulário como inválido
        valido = false;

    } else {

        // Remove a mensagem de erro caso a senha seja válida
        document.getElementById("erro-senha").textContent = "";
    }

    // Verifica se a confirmação de senha é diferente da senha original
    if (confirmaSenha !== senha ) {

        // Exibe mensagem de erro informando que as senhas são diferentes
        document.getElementById("erro-confirmar").textContent = "Erro - Senhas diferentes";

        // Define o formulário como inválido
        valido = false;

    } else {

        // Remove a mensagem de erro caso as senhas coincidam
        document.getElementById("erro-confirmar").textContent = "";
    }

    // Executa somente se todos os campos forem válidos
    if (valido) {

        // Seleciona a div de sucesso
        const divSucesso = document.getElementById('sucesso');

        // Cria um objeto com os dados do usuário
        const user = {email, senha};

        // Salva o objeto no localStorage em formato JSON
        localStorage.setItem("user", JSON.stringify(user));

        // Seleciona o formulário pelo ID "form"
        const frm = document.getElementById('form');

        // Remove a classe "oculto" da mensagem de sucesso
        divSucesso.classList.remove('oculto');

        // Adiciona a classe "oculto" ao formulário para escondê-lo
        frm.classList.add('oculto');
    }
});