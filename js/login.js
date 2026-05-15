// Seleciona o formulário pelo ID "form-login"
const frm = document.getElementById("form-login");

// Adiciona um evento de envio (submit) ao formulário
frm.addEventListener('submit', (e) =>{

    // Impede o recarregamento automático da página ao enviar o formulário
    e.preventDefault();

    // Captura o valor digitado no campo de e-mail
    const email = document.getElementById("inEmail").value;

    // Captura o valor digitado no campo de senha
    const senha = document.getElementById("inSenha").value;

    // Variável de controle para validar os campos
    let valido = true;

    // Verifica se o e-mail está vazio ou não possui "@"
    if(email === "" || !email.includes("@")) {

        // Exibe mensagem de erro no elemento com ID "erro-email"
        document.getElementById("erro-email").textContent = "Erro - Insira o e-mail cadastrado";

        // Define que o formulário não é válido
        valido=false;

    } else {

        // Limpa a mensagem de erro caso o e-mail esteja correto
        document.getElementById("erro-email").textContent = "";
    }

    // Verifica se a senha está vazia
    if (senha === "") {

        // Exibe mensagem de erro no elemento com ID "erro-senha"
        document.getElementById("erro-senha").textContent = "Erro - Insira a senha válida";

        // Define o formulário como inválido
        valido = false;

    } else {

        // Remove a mensagem de erro caso a senha esteja correta
        document.getElementById("erro-senha").textContent = "";
    }

    // Se houver erro de validação, interrompe a execução
    if (!valido) return;

    // Busca no localStorage os dados salvos com a chave "user"
    const dado = localStorage.getItem("user");

    // Verifica se não existe usuário cadastrado
    if(!dado) {

        // Exibe alerta informando que não há cadastro
        alert("Usuário nao cadastrado!");

        // Interrompe a execução
        return;
    }

    // Converte os dados JSON salvos em objeto JavaScript
    const userSalvo = JSON.parse(dado);

    // Verifica se o e-mail e senha digitados são iguais aos salvos
    if(email === userSalvo.email && senha === userSalvo.senha) {

        // Seleciona a div de mensagem de sucesso
        const divSucesso = document.getElementById('sucesso');

        // Define a mensagem de sucesso
        divSucesso.textContent = "Login realizado com sucesso!";

        // Remove a classe "oculto" para mostrar a mensagem
        divSucesso.classList.remove('oculto');
        
        // Redireciona o usuário para a página dashboard.html
        window.location.href = "dashboard.html";

    } else {

        // Exibe alerta caso o e-mail ou senha estejam incorretos
        alert("E-mail ou senha incorretos!");
    }
});