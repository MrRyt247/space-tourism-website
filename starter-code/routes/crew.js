import data from "../data.json" with { type: "json" };

const crew = document.querySelector(".crew");
const crewLinks = crew.querySelector(".dot-indicators");
const [ commanderLink, specialistLink, pilotLink, engineerLink ] = crewLinks.querySelectorAll("button");
const crewArticle = crew.querySelector("article");

function updateCrew(index) {
  // Update aria-selected states
  [ commanderLink, specialistLink, pilotLink, engineerLink ].forEach(link => link.setAttribute("aria-selected", false));
  [ commanderLink, specialistLink, pilotLink, engineerLink ][index].setAttribute("aria-selected", true); 

  // Update image sources
  const picture = crew.querySelector("picture");
  picture.querySelector("source").srcset = data.crew[index].images.webp;
  picture.querySelector("img").src = data.crew[index].images.png;
  picture.querySelector("img").alt = data.crew[index].name;

  // Update content
  crewArticle.querySelector("header h2").textContent = data.crew[index].role;
  crewArticle.querySelector("header p").textContent = data.crew[index].name;
  crewArticle.querySelector("p:not(.fs-700)").textContent = data.crew[index].bio;
}

commanderLink.addEventListener("click", () => updateCrew(0));
specialistLink.addEventListener("click", () => updateCrew(1));
pilotLink.addEventListener("click", () => updateCrew(2));
engineerLink.addEventListener("click", () => updateCrew(3));