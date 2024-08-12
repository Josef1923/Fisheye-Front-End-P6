// DOM Elements
const modal = document.getElementById("contact_modal"); 
const contactButton = document.getElementById("contactButton"); 
const closeButton = document.getElementById("closeButton"); 
const first = document.getElementById("first");      
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");

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
  

  //Empechement comportement par défaut "submit"  
modal.addEventListener("submit", (event) => {
    event.preventDefault();        

        //Console log
        const prénom = first.value;
        console.log("Prénom:", prénom);        
        const nom = last.value;
        console.log("Nom:", nom);
        const mail = email.value;
        console.log("Email:", mail);
        const msg = message.value;
        console.log("Message:", msg);             
    });
       