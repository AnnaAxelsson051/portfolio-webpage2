const openModalButtons = document.querySelectorAll("[data-modal-target]");
//we do this as idf there were many ways to open the modal
//create a variable openModalButtons and in here we have the data attribute and this will be out buttons for opening our modal
const closeModalButtons = document.querySelectorAll("[data-close-button]");
//same for our close buttons

const overlay = document.getElementById("overlay");
//and select the overlay so we can show and hide it as needed
//and select the overlay id

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

//we loop over the modalbuttons
//and for each one we add an eventlistener listen for a click and then get the modal
//use the data set which allows us to acces all the dataset attributes as if they were js objekts och gör dem till camelCase åt oss, i detta fall väljer vi modalen (den sista parentesen kommer att hämta data-modal-target från vår html) sen när vi ha modalen kalla på en funktion openModal och pass modal till den

//and the same for our close modal buttons
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});
//we wanna access the closes parent with the class modal

//when we click the overlay we want it to close the modal:
overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

//samma som ovan men om vi har flera modaler:
/*overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});*/

//wana find every modal the is open
//and for each we wanna close it

function openModal(modal) {
  if (modal == null) return;
  //if no modal just return
  modal.classList.add("active");
  //but if we have a modal we wanna call the classList and add a class to thet list dvs the active class
  overlay.classList.add("active");
  //do the same this for the overlay
}

//do the same for when we wanna close it but then remove the active class
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
