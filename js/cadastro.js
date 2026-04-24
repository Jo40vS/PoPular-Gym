const frm = document.querySelector("form");


frm.addEventListener('submit',(e) => {
    e.preventDefault();

    const nome = frm.inName.value;
    const email = frm.inEmail.value;
    const senha = frm.inSenha.value;
    const confirmaSenha = frm.inConfirmarSenha.value;
    

    if (nome === "") {
        document.getElementById("erro-name").textContent = "Erro - Insira um nome completo";
    } else {
        inName.textContent = "";
    }


    
    if (senha.length < 6) {
        document.getElementById("erro-senha").textContent = "Erro - Insira no minimo 6 caracteres";
    }

    if (confirmaSenha !== senha ) {
        document.getElementById("erro-confrimar").textContent = "Erro - Senhas diferentes";
    }
})