function validator(){

    const name = document.querySelector("#fname")
    const lastName = document.querySelector("#lname")
    const email = document.querySelector("#email")
    const general = document.querySelector("#general")
    const support = document.querySelector("#support")
    const message = document.querySelector("#message")
    const term = document.querySelector("#term")
    
    const message1Error = document.querySelector(".message1-error")
    const message2Error = document.querySelector(".message2-error")
    const message3Error = document.querySelector(".message3-error")
    const message4Error = document.querySelector(".message4-error")
    const message5Error = document.querySelector(".message5-error")
    const message6Error = document.querySelector(".message6-error")
    
    const nameValue = name.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const generalValue = general.value
    const supportValue = support.value
    const messageValue = message.value
    const termValue = term.value

    if(nameValue === ""){
        name.classList.add("error")
        message1Error.textContent = "This field is required"
    } else {
        name.classList.remove("error")
        message1Error.textContent = ""
    }
    
    if(lastNameValue === ""){
        lastName.classList.add("error")
        message2Error.textContent = "This field is required"
    } else {
        lastName.classList.remove("error")
        message2Error.textContent = ""
    }

    if(emailValue === ""){
        email.classList.add("error")
        message3Error.textContent = "Please enter a valid email address"
    } else {
        email.classList.remove("error")
        message3Error.textContent = ""
    }

    if(messageValue === ""){
        message.classList.add("error")
        message5Error.textContent = "This field is required"
    } else {
        message.classList.remove("error")
        message5Error.textContent = ""
    }

    if(term === true){
        message6Error.textContent = "To submit this form, please consent to being contacted"
    } else {
        message6Error.textContent = ""
    }

}