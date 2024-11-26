function compFormulario(){
    const firstName = document.querySelector("#first-name")
    const lastName = document.querySelector("#last-name")
    const emailAddress = document.querySelector("#email-address")
    const password = document.querySelector("#password")
    const mensagem1Erro = document.querySelector(".mensagem1-erro")
    const mensagem2Erro = document.querySelector(".mensagem2-erro")
    const mensagem3Erro = document.querySelector(".mensagem3-erro")
    const mensagem4Erro = document.querySelector(".mensagem4-erro")
    
    const firstnameValue = document.querySelector("#first-name").value
    const lastnameValue = document.querySelector("#last-name").value
    const emailaddressValue = document.querySelector("#email-address").value
    const passwordValue = document.querySelector("#password").value

    if(firstnameValue === ""){
        mensagem1Erro.textContent = "First Name cannot be empty"
        firstName.classList.add("erro")

    } else {
        mensagem1Erro.textContent = ""
        firstName.classList.remove("erro")
        firstName.classList.add("complete")
    }

    if(lastnameValue === ""){
        mensagem2Erro.textContent = "Last Name cannot be empty"
        lastName.classList.add("erro")
    } else {
        mensagem2Erro.textContent = ""
        lastName.classList.remove("erro")
        lastName.classList.add("complete")
    }

    if(emailaddressValue === ""){
        mensagem3Erro.textContent = "Looks like this is not an email"
        emailAddress.classList.add("erro")
    } else {
        mensagem3Erro.textContent = ""
        emailAddress.classList.remove("erro")
        emailAddress.classList.add("complete")
    }

    if(passwordValue === ""){
        mensagem4Erro.textContent = "Password cannot be empty"
        password.classList.add("erro")
    } else {
        mensagem4Erro.textContent = ""
        password.classList.remove("erro")
        password.classList.add("complete")
    }
}