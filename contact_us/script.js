function contactUs(){

    const firstName = document.querySelector("#first-name")
    const lastName = document.querySelector("#last-name")
    const emailAddress = document.querySelector("#email-address")
    const message = document.querySelector("#message")
    const botao = document.querySelector(".botao")

    const firstNameValue = document.querySelector("#first-name").value
    const lastNameValue = document.querySelector("#last-name").value
    const emailAddressValue = document.querySelector("#email-address").value
    const messageValue = document.querySelector("#message").value

    if(firstNameValue === ""){
        firstName.classList.add("erro")
    } else {
        firstName.classList.remove("erro")
    }
    if(lastNameValue === ""){
        lastName.classList.add("erro")
    } else {
        lastName.classList.remove("erro")
    }
    if(emailAddressValue === ""){
        emailAddress.classList.add("erro")
    } else {
        emailAddress.classList.remove("erro")
    }
    if(messageValue === ""){
        message.classList.add("erro")
    } else {
        message.classList.remove("erro")
    }
}