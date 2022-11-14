//knapp som man ska trycka på
//för att ladda repos:

const url = "https://api.github.com/users/AnnaAxelsson051/repos";

const myList = document.querySelector(".myList");

const myBtn = document.getElementById("myBtn");

async function getData();


myBtn.addEventListener("click", async function (e) {
  myList.innerHTML = `Please wait while I fetch the list`;
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    myList.innerHTML = ``;
    //tömmer spinner
    //eller om det är en spinner sätta till display none
    for (let i = 0; i < 4; i++) {
      console.log(json[i].html_url);
      myList.innerHTML += `<li>${json[i].html_url}<li>`;
    }
  } else {
    console.log("HTTP-Error: " + response.status);
    myList.innerHTML = ``;
    myList.innerHTML + `Sorry, was unable to load the list`;
    //*****här kan man tex skriva in vad som ska ske om json inte kan laddas (vg uppg)
    //så användaren vet att ngt gått fel i domen
    //Ge dem en spinner om det tar lång tid
  }
}



getData();

/*//knapp som man ska trycka på
//för att ladda repos:

const url = "https://api.github.com/users/AnnaAxelsson051/repos";

const myList = document.querySelector(".myList");

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", getData);

async function getData() {
  myList.innerHTML = `Please wait while I fetch the list`;
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    myList.innerHTML = ``;
    //tömmer spinner
    //eller om det är en spinner sätta till display none
    for (let i = 0; i < 4; i++) {
      console.log(json[i].html_url);
      myList.innerHTML += `<li>${json[i].html_url}<li>`;
    }
  } else {
    console.log("HTTP-Error: " + response.status);
    myList.innerHTML = ``;
    myList.innerHTML + `Sorry, was unable to load the list`;
    //*****här kan man tex skriva in vad som ska ske om json inte kan laddas (vg uppg)
    //så användaren vet att ngt gått fel i domen
    //Ge dem en spinner om det tar lång tid
  }
}

getData();
 
*/
