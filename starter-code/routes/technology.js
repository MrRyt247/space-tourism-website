import data from "../data.json" with { type: "json" };

const technology = document.querySelector(".technology");
const technologyLinks = technology.querySelector(".number-indicators");
const [ launchVehicleLink, spaceportLink, spaceCapsuleLink ] = technologyLinks.querySelectorAll("button");
const technologyArticle = technology.querySelector("article");

function updateTechnology(index) {
  // Update aria-selected states
  [launchVehicleLink, spaceportLink, spaceCapsuleLink].forEach(link => 
    link.setAttribute("aria-selected", false)
  );
  [launchVehicleLink, spaceportLink, spaceCapsuleLink][index].setAttribute("aria-selected", true);
  
  // Update image sources
  const picture = technology.querySelector("picture");
  picture.querySelector("source").srcset = data.technology[index].images.portrait;
  picture.querySelector("img").src = data.technology[index].images.landscape;
  picture.querySelector("img").alt = data.technology[index].name;
  
  // Update content
  technologyArticle.querySelector("p.fs-700").textContent = data.technology[index].name;
  technologyArticle.querySelector("p:not(.fs-700)").textContent = data.technology[index].description;
}

launchVehicleLink.addEventListener("click", () => updateTechnology(0));
spaceportLink.addEventListener("click", () => updateTechnology(1));
spaceCapsuleLink.addEventListener("click", () => updateTechnology(2));