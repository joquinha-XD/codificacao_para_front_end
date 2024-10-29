const velocidade = document.querySelector(".velocidade")
const botao = document.querySelector(".botao")
const mensagem = document.querySelector(".mensagem")

botao.addEventListener("click", (event) => {

    event.preventDefault();

    const velocidade = document.querySelector(".velocidade").value

    if(velocidade === ""){
        mensagem.textContent = "Digite um valor válido!"
        document.body.style.backgroundcolor = "white"
        return
    }

   if (velocidade > 60) {
    mensagem.textContent = "Você ultrapassou a velocidade permitida"
    document.body.style.backgroundColor = "red"
   }else{
    mensagem.textContent = "Você está dentro do limite de velocidade"
    document.body.style.backgroundColor = "green"
   }

})