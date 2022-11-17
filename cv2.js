let url = "cv.json";
const myList = document.querySelector(".myList");
const loadingStatus = document.querySelector(".status");

const translation = {
  employment: "Mina anställningar",
  education: "Mina utbildningar",
};

function renderToDOM(a, b = "") {
  //render a to dom and b if it exists
  console.log("a: ", a);
  console.log("b: ", b);
  const myRenderedCvItem = document.createElement("div");
  myRenderedCvItem.innerHTML = `<strong>${a}</strong><p>${b}</p>`;
  myList.appendChild(myRenderedCvItem);
}

async function getCVData() {
  let response = await fetch(url);
  //fetcha
  if (response.ok) {
    //om det gick bra plocka ut jsonbodyn ur svaret
    let cvData = await response.json();
    //svaret hamnar i cv data som innehåller 3 keys
    myList.innerText = "";

    console.log("employment");
    const cvDataKeys = Object.keys(cvData);
    renderToDOM(cvDataKeys[0]);
    cvData.employment.forEach((emp) => {
      renderToDOM(emp.heading, emp.text);
      //call function below to render the
      console.log(emp.heading);
      console.log(emp.text);
    });

    console.log("education");
    renderToDOM(cvDataKeys[1]);
    cvData.education.forEach((eduText) => {
      console.log(eduText);
      renderToDOM(eduText);
    });
  }
}
getCVData();
