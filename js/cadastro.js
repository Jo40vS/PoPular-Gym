const frm = document.querySelector("form");


frm.addEventListener('submit',(e) => {
    e.preventDefault();

    const nome = document.getElementById("inName").value;
    const email = document.getElementById("inEmail").value;
    const senha = document.getElementById("inSenha").value;
    const confirmaSenha = document.getElementById("inConfirmaSenha").value;
    

    let valido = true;

    if (nome === "") {
        document.getElementById("erro-name").textContent = "Erro - Insira um nome completo";
        valido = false;
    } else {
        document.getElementById("erro-name").textContent = "";
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("erro-email").textContent = "Erro - E-mail inválido";
        valido = false;
    } else {
        document.getElementById("erro-email").textContent = "";
    }
    
    if (senha.length < 6) {
        document.getElementById("erro-senha").textContent = "Erro - Insira no minimo 6 caracteres";
        valido = false;
    }else {
        document.getElementById("erro-senha").textContent = "";
    }


    if (confirmaSenha !== senha ) {
        document.getElementById("erro-confirmar").textContent = "Erro - Senhas diferentes";
        valido = false;
    } else {
        document.getElementById("erro-confirmar").textContent = "";
    }

    if (valido) {
        const divSucesso = document.getElementById('sucesso');
        const frm = document.getElementById('form');

        divSucesso.classList.remove('oculto');

        frm.classList.add('oculto');
    }

})