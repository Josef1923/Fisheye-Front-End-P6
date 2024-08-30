/**
 *script pour la modal de contact
 */
const modal = document.getElementById("contact_modal");
const contactButton = document.getElementById("contactButton");
const closeButton = document.getElementById("closeButton");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");

contactButton.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

modal.addEventListener("submit", (event) => {
  event.preventDefault();

  const prénom = first.value;
  console.log("Prénom:", prénom);
  const nom = last.value;
  console.log("Nom:", nom);
  const mail = email.value;
  console.log("Email:", mail);
  const msg = message.value;
  console.log("Message:", msg);
});
