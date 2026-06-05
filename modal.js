/* ========== MODAL FUNKTSIOON: KONTAKTVORMI KÄSITLEMINE ==========
   See kood halludab kontaktvormi esitamist ja tänu-modali kuvamist.
*/

/* Kontaktvormi element */
const form = document.querySelector("form");

/* Tänusõnu modal dialoogi element */
const modal = document.getElementById("thankModal");

/* Nupud modali sulgemiseks */
const closeBtn = document.getElementById("closeThank");
const closeThankBtn = document.getElementById("closeThankBtn");

/* Vormi sisestuse väljad */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

/* Vormi esitamise sündmus - kuvatakse tänumodal */
form.addEventListener("submit", function (event) {
  /* Keelame vaikevormi esitamise */
  event.preventDefault();

  /* Näitame tänumodali */
  modal.classList.add("show");

  /* Tühjendame vormi väljad */
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

/* Modali sulgemise funktsioon */
function closeModal() {
  modal.classList.remove("show");
}

/* Sulemine nuppudest */
closeBtn.onclick = closeModal;
closeThankBtn.onclick = closeModal;

/* Sulemine modali väljaspool klikkimisel */
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);

    const response = await fetch("save.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      modal.classList.add("show");
      form.reset();
    } else {
      alert("Salvestamine ebaõnnestus.");
    }
  } catch (error) {
    console.error(error);
    alert("Serveriga ühendumine ebaõnnestus.");
  }
});