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
})
