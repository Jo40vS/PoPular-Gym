document.addEventListener("DOMContentLoaded", () => {
    //busca os dados do usuário cadastrado
    const usuarioLogado = localStorage.getItem("user");
    
    //caso seja null, nao existe login
    if (!usuarioLogado) {
        //redireciona a tela de login
        window.location.href = "login.html";
    }
    //seleciona o botao de logout
    const btSair = document.getElementById("btLogout");

    if (btSair) {
        btSair.addEventListener("click", () => {
            //limpa tudo do localStorage
            localStorage.clear();
            //redireciona a tela de login
            window.location.href = "login.html";
        });
    }
});