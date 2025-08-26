import data from "../data.json" with { type: "json" };

const crew = document.querySelector(".crew");
const crewLinks = crew.querySelector(".dot-indicators");
const [ commanderLink, specialistLink, pilotLink, engineerLink ] = crewLinks.querySelectorAll("button");
const crewArticle = crew.querySelector("article");
const picture = crew.querySelector("picture");

// Add transition helper function
function transitionContent(updateFunction) {
  // Fade out current content
  crewArticle.classList.add("content-fade-out");
  picture.classList.add("image-fade-out");
  
  // Wait for fade out, then update content and fade in
  setTimeout(() => {
    updateFunction();
    
    // Remove fade out classes and add fade in classes
    crewArticle.classList.remove("content-fade-out");
    picture.classList.remove("image-fade-out");
    crewArticle.classList.add("content-entering");
    picture.classList.add("image-entering");
    
    // Clean up animation classes after animation completes
    setTimeout(() => {
      crewArticle.classList.remove("content-entering");
      picture.classList.remove("image-entering");
    }, 400);
  }, 150);
}

function updateCrew(index) {
  transitionContent(() => {
    // Update aria-selected states
    [ commanderLink, specialistLink, pilotLink, engineerLink ].forEach(link => link.setAttribute("aria-selected", false));
    [ commanderLink, specialistLink, pilotLink, engineerLink ][index].setAttribute("aria-selected", true); 

    // Update image sources
    picture.querySelector("source").srcset = data.crew[index].images.webp;
    picture.querySelector("img").src = data.crew[index].images.png;
    picture.querySelector("img").alt = data.crew[index].name;

    // Update content
    crewArticle.querySelector("header h2").textContent = data.crew[index].role;
    crewArticle.querySelector("header p").textContent = data.crew[index].name;
    crewArticle.querySelector("p:not(.fs-700)").textContent = data.crew[index].bio;
  });
}

commanderLink.addEventListener("click", () => updateCrew(0));
specialistLink.addEventListener("click", () => updateCrew(1));
pilotLink.addEventListener("click", () => updateCrew(2));
engineerLink.addEventListener("click", () => updateCrew(3));