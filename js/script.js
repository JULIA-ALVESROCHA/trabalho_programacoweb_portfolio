// Portfólio Júlia Rocha
// Script principal (Lista 1, Ex. 7: aplicar JavaScript a uma página)

// 1. Mostra o ano atual no rodapé
const ano = document.querySelector("#ano");
if (ano) {
  ano.textContent = new Date().getFullYear();
}

// 2. Botão de modo claro / escuro
const botaoTema = document.querySelector("#botao-tema");
const raiz = document.documentElement;

function aplicarTema(tema) {
  if (tema === "escuro") {
    raiz.setAttribute("data-tema", "escuro");
    if (botaoTema) botaoTema.textContent = "Modo claro";
  } else {
    raiz.removeAttribute("data-tema");
    if (botaoTema) botaoTema.textContent = "Modo escuro";
  }
}

// Lembra a escolha da pessoa entre as páginas
let temaSalvo = null;
try {
  temaSalvo = localStorage.getItem("tema");
} catch (erro) {
  temaSalvo = null;
}
aplicarTema(temaSalvo);

if (botaoTema) {
  botaoTema.addEventListener("click", function () {
    const novoTema = raiz.getAttribute("data-tema") === "escuro" ? "claro" : "escuro";
    aplicarTema(novoTema);
    try {
      localStorage.setItem("tema", novoTema);
    } catch (erro) {
      // Se o navegador bloquear o armazenamento, o tema só não fica salvo
    }
  });
}
