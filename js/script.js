

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
function validaFormulario(){
    if(document.getElementById("nome").value != "" &&
            document.getElementById("email").value != "" &&
            document.getElementById("telefone").value != "" ){
            alert("Prontinho! Isso foi um teste com Javascript.")
        }else{

            alert("Por favor, preencha os campos nome e email.")
    }
}