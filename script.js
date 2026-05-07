const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    // impede recarregar a página
    event.preventDefault();

    document.getElementById("mensagem").style.display = "block";

    // vai para outra página
    setTimeout(() => {
        window.location.href = "janela_principal.html";
    }, 1500);

});
