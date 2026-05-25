const form = document.querySelector("form");

const modal = document.getElementById("thankModal");

const closeBtn = document.getElementById("closeThank");
const closeThankBtn = document.getElementById("closeThankBtn");

/* Inputid */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

/* Ava modal */
form.addEventListener("submit", function(event) {

    event.preventDefault();

    modal.classList.add("show");

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});

/* Sulge funktsioon */
function closeModal() {
    modal.classList.remove("show");
}

closeBtn.onclick = closeModal;
closeThankBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};