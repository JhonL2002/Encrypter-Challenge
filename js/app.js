//Initialize variables
window.addEventListener("load", checkWidth);
window.addEventListener("resize", checkWidth);
var copy = document.getElementById("copy");
var messageContent = document.getElementById("message_content");
var imageContent = document.getElementById("image");
var newDiv = document.createElement("div");
var resultParagraph = document.createElement("p");
var justifyContent = document.getElementById("third_element");
var imageContainer = document.querySelector(".start_image");

function encryptTextButton(){
    let textarea = document.getElementById("message_text");
    let textvalue = textarea.value;
    validateText(textvalue);
    resultParagraph.textContent = encryptText(textvalue);
}

function decryptTextButton(){
    let textarea = document.getElementById("message_text");
    let textvalue = textarea.value;
    validateText(textvalue);
    resultParagraph.textContent = decryptText(textvalue);
}

function copyToClipboard(){
    const text = resultParagraph.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copyied to clipboard successfully");
        })
        .catch(err => {
            alert("Error to copy: ", err);
        });
}

function validateText(textValue){
    if (textValue === "" && window.innerWidth > 769){
        showMessages();
    }else if (window.innerWidth < 769 && textValue === ""){
        alert("Text cannot be empty!");
    }
    else{
        let regex = /^[a-z\s]+$/;
        let isValid = regex.test(textValue);
        if (isValid == true){
            removeItems();
            createNewDiv();
        }
        else{
            alert("Invalid text, try again");
        }
    }
}

function removeItems(){
    //Verify if the content is hidden and remove the messages items
    if (copy.style.display === "none" && messageContent.style.display === "flex" && imageContent.style.display === "flex"){
        copy.style.display = "flex";
        messageContent.style.display = "none";
        imageContent.style.display = "none";
    }
}

function showMessages(){
    //Show error messages
    copy.style.display = "none";
    messageContent.style.display = "flex";
    imageContent.style.display = "flex";
    newDiv.remove();
    justifyContent.style.justifyContent = "center";
}

function createNewDiv(){
    //Create a new <Div> to show the encrypted/decrypted text
    justifyContent.style.justifyContent = "";
    newDiv.style.width = "100%";
    newDiv.style.height = "825px";
    newDiv.style.borderRadius = "32px";
    newDiv.style.backgroundColor = "#FFFFFF";
    resultParagraph.style.margin = "24px";
    resultParagraph.style.fontFamily = "'Inter', sans-serif";
    resultParagraph.style.color = "#495057";
    justifyContent.appendChild(newDiv);
    newDiv.appendChild(resultParagraph);
}

function encryptText(text){
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text){
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

function checkWidth(){
    if (window.innerWidth < 769){
        imageContainer.style.display = "none";
    }
    else{
        imageContainer.style.display = "flex"
    }
}