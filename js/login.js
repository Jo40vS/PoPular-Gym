const frm = document.getElementById("form-login");

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById("inEmail").value;
    const senha = document.getElementById("inSenha").value;

    let valido = true;

    if(email === "" || !email.includes("@")) {
        document.getElementById("erro-email").textContent = "Erro - Insira o e-mail cadastrado";
        valido=false;
    } else {
        document.getElementById("erro-email").textContent = "";
    }


    if (senha === "") {
        document.getElementById("erro-senha").textContent = "Erro - Insira a senha válida";
        valido = false;
    } else {
        document.getElementById("erro-senha").textContent = "";
    }

    if (!valido) return;

    const dado = localStorage.getItem("user");

    if(!dado) {
        alert("Usuário nao cadastrado!");
        return;
    }

    const userSalvo = JSON.parse(dado);

        if(email === userSalvo.email && senha === userSalvo.senha) {
            const divSucesso = document.getElementById('sucesso');

            divSucesso.textContent = "Login realizado com sucesso!";
            divSucesso.classList.remove('oculto');
            
            window.location.href = "dashboard.html";

        } else {
            alert("E-mail ou senha incorretos!");
        }
});
