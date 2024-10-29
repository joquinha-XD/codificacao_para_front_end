const caixa = document.querySelector(".caixa")
const botao = document.querySelector(".botao")

botao.addEventListener("click", () => {
    caixa.classList.toggle("vermelho");
})

// botao.addEventListener("click", () =>{
//     caixa.classList.remove("vermelho")
// })