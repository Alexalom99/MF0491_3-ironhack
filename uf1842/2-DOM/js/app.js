/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const text = document.querySelector("#message");
const btn = document.querySelector("#btn-send");
const lastMessage = document.querySelector("#last-message");

btn.addEventListener("click", function() {
    lastMessage.textContent = text.value;
    text.value = "";
})
