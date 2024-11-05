function verificarDados() {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const senha = document.querySelector("#senha").value;
    const resultado = document.querySelector(".resultado")

    if(nome === "" || sobrenome === "" || senha === ""){
        window.alert("O campo não pode estar vazio")
        document.querySelector("#nome").style.borderColor = "red"
        document.querySelector("#sobrenome").style.borderColor = "red"
        document.querySelector("#senha").style.borderColor = "red"
        return
    }

    resultado.innerHTML =  `<p>Nome: ${nome}</p>
                            <p>Sobrenome: ${sobrenome}</p>
                            <p>Senha: ${senha}</p>`
}