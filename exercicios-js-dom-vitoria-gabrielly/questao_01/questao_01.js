function inserirTitulo() {
    let TextoDigitado = document.getElementById("txt-titulo").value;
    let titulo = document.getElementById("titulo");
    titulo.innerText = TextoDigitado;
    titulo.style.color = "blue";
}