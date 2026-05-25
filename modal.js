const form = document.querySelector("form");

const modal = document.getElementById("thankModal");

const closeBtn = document.getElementById("closeThank");

const closeThankBtn = document.getElementById("closeThankBtn");

/* Form submit */
form.addEventListener("submit", function(event) {

    event.preventDefault();

    modal.style.display = "flex";
});

/* X nupp */
closeBtn.onclick = function() {
    modal.style.display = "none";
};

/* Sulge nupp */
closeThankBtn.onclick = function() {
    modal.style.display = "none";
};

/* Klikk taustale */
window.onclick = function(event) {

    if(event.target === modal) {
        modal.style.display = "none";
    }
};