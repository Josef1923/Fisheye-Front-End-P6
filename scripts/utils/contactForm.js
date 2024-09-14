/**
 * script pour la modal de contact
 */
const modal = document.getElementById("contact_modal");
const contactButton = document.getElementById("contactButton");
const closeButton = document.getElementById("closeButton");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("#contact_modal form");

contactButton.addEventListener("click", openModal);

function openModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");

    // Met le focus directement sur le champ "Prénom"
    first.focus();

    document.addEventListener("keydown", handleKeyPress);
}

closeButton.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.removeEventListener("keydown", handleKeyPress);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const prénom = first.value;
    console.log("Prénom:", prénom);
    const nom = last.value;
    console.log("Nom:", nom);
    const mail = email.value;
    console.log("Email:", mail);
    const msg = message.value;
    console.log("Message:", msg);

    closeModal();
});

// Fonction pour gérer la fermeture avec la touche Échap
function handleKeyPress(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}