function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let dataNascimento = document.getElementById("dataNasc").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("uf").value;
    
    let textoFinal = `${nome} nasceu no dia ${dataNascimento} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    let resultado = document.getElementById("resultado");
    resultado.innerText = textoFinal;
    resultado.style.color = "green";
    resultado.style.fontSize = "24px"; }