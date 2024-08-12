// DOM Elements
const modal = document.getElementById("contact_modal"); 
const contactButton = document.getElementById("contactButton"); 
const closeButton = document.getElementById("closeButton"); 

// Event pour ouvrir le modal
contactButton.addEventListener("click", openModal);

// Fonction pour ouvrir le modal
function openModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false"); 
  }

// Event pour fermer le modal
closeButton.addEventListener("click", closeModal);

// Fonction pour fermer le modal
function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true"); 
  }
  