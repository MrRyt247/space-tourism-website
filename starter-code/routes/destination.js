import data from "../data.json" with { type: "json" };

const destination = document.querySelector(".destination");
const destinationLinks = destination.querySelector(".tab-list");
const [ MoonLink, MarsLink, EuropaLink, TitanLink ] = destinationLinks.querySelectorAll("button");
const destinationArticle = destination.querySelector("article");

function updateDestination(index) {
  // Update aria-selected states
  [ MoonLink, MarsLink, EuropaLink, TitanLink ].forEach(link => link.setAttribute("aria-selected", false));
  [ MoonLink, MarsLink, EuropaLink, TitanLink ][index].setAttribute("aria-selected", true); 

  // Update image sources
  const picture = destination.querySelector("picture");
  picture.querySelector("source").srcset = data.destinations[index].images.webp;
  picture.querySelector("img").src = data.destinations[index].images.png;
  picture.querySelector("img").alt = data.destinations[index].name;

  // Update content
  destinationArticle.querySelector("h2").textContent = data.destinations[index].name;
  destinationArticle.querySelector("p").textContent = data.destinations[index].description;  
  destinationArticle.querySelector(".destination-meta > div:first-of-type > p").textContent = data.destinations[index].distance;
  destinationArticle.querySelector(".destination-meta > div:last-of-type > p").textContent = data.destinations[index].travel;
}

MoonLink.addEventListener("click", () => updateDestination(0));
MarsLink.addEventListener("click", () => updateDestination(1));
EuropaLink.addEventListener("click", () => updateDestination(2));
TitanLink.addEventListener("click", () => updateDestination(3));