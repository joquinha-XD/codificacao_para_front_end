function Cadastrar() {

    const nomeProprio = document.getElementById("nome-proprio")
    const apelido = document.getElementById("apelido")
    const nascimento = document.getElementById("nascimento")
    const genero = document.querySelector("#genero")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const nomeProprioValue = nomeProprio.value
    const apelidoValue = apelido.value
    const nascimentoValue = nascimento.value
    const generoValue = genero.value
    const emailValue = email.value
    const senhaValue = senha.value

    if(nomeProprioValue === ""){
        nomeProprio.classList.add("erro")
        return
    } else {
        nomeProprio.classList.remove("erro")
    }

    if(apelidoValue === ""){
        apelido.classList.add("erro")
        return
    } else {
        apelido.classList.remove("erro")
    }

    if(nascimentoValue === ""){
        nascimento.classList.add("erro")
        return
    } else {
        nascimento.classList.remove("erro")
    }

    if(generoValue === ""){
        genero.classList.add("erro")
        return
    } else {
        genero.classList.remove("erro")
    }

    if(emailValue === ""){
        email.classList.add("erro")
        return
    } else {
        email.classList.remove("erro")
    }

    if(senhaValue === ""){
        senha.classList.add("erro")
        return
    } else {
        senha.classList.remove("erro")
    }
}