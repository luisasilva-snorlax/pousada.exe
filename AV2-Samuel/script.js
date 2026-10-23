// MENU RESPONSIVO

function abrirMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("ativo");
}


// MODAL DAS ACOMODAÇÕES

function mostrarDetalhes(titulo, texto) {

    document.getElementById("titulo-modal").innerText = titulo;

    document.getElementById("texto-modal").innerText = texto;

    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {

    const modal = document.getElementById("modal");

    modal.style.display = "none";
}


// FORMULÁRIO

function enviarFormulario(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(
        "Obrigado pelo contato, " + nome +
        "! Sua mensagem foi enviada."
    );

}

// MOVIMENTO DO CONTEÚDO AO ROLAR A PÁGINA

const conteudoHero = document.querySelector(".hero-conteudo");

window.addEventListener("scroll", function() {

    const movimento = window.scrollY * 0.8;

    conteudoHero.style.transform =
        "translateY(-" + movimento + "px)";

});