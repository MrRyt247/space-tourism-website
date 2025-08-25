import data from "../data.json" with { type: "json" };

const destination = document.querySelector(".destination");
const destinationLinks = destination.querySelector(".tab-list");
const [ MoonLink, MarsLink, EuropaLink, TitanLink ] = destinationLinks.querySelectorAll("button");
const destinationArticle = destination.querySelector("article");

MoonLink.addEventListener("click", () => {
  [ MoonLink, MarsLink, EuropaLink, TitanLink ].forEach(link => link.setAttribute("aria-selected", false));
  MoonLink.setAttribute("aria-selected", true); 
  destination.querySelector("picture source").srcset = data.destinations[0].images.webp;
  destination.querySelector("picture img").src = data.destinations[0].images.png;
  destination.querySelector("picture img").alt = data.destinations[0].name;
  destinationArticle.querySelector("h2").textContent = data.destinations[0].name;
  destinationArticle.querySelector("p").textContent = data.destinations[0].description;  
  destinationArticle.querySelector(".destination-meta > div:first-of-type > p").textContent = data.destinations[0].distance;
  destinationArticle.querySelector(".destination-meta > div:last-of-type > p").textContent = data.destinations[0].travel;
});

MarsLink.addEventListener("click", () => {
  [ MoonLink, MarsLink, EuropaLink, TitanLink ].forEach(link => link.setAttribute("aria-selected", false));
  MarsLink.setAttribute("aria-selected", true); 
  destination.querySelector("picture source").srcset = data.destinations[1].images.webp;
  destination.querySelector("picture img").src = data.destinations[1].images.png;
  destination.querySelector("picture img").alt = data.destinations[1].name;
  destinationArticle.querySelector("h2").textContent = data.destinations[1].name;
  destinationArticle.querySelector("p").textContent = data.destinations[1].description;  
  destinationArticle.querySelector(".destination-meta > div:first-of-type > p").textContent = data.destinations[1].distance;
  destinationArticle.querySelector(".destination-meta > div:last-of-type > p").textContent = data.destinations[1].travel;
});

EuropaLink.addEventListener("click", () => {
  [ MoonLink, MarsLink, EuropaLink, TitanLink ].forEach(link => link.setAttribute("aria-selected", false));
  EuropaLink.setAttribute("aria-selected", true);
  destination.querySelector("picture source").srcset = data.destinations[2].images.webp;
  destination.querySelector("picture img").src = data.destinations[2].images.png; 
  destination.querySelector("picture img").alt = data.destinations[2].name;
  destinationArticle.querySelector("h2").textContent = data.destinations[2].name;
  destinationArticle.querySelector("p").textContent = data.destinations[2].description;
  destinationArticle.querySelector(".destination-meta > div:first-of-type > p").textContent = data.destinations[2].distance;
  destinationArticle.querySelector(".destination-meta > div:last-of-type > p").textContent = data.destinations[2].travel;
});

TitanLink.addEventListener("click", () => {
  [ MoonLink, MarsLink, EuropaLink, TitanLink ].forEach(link => link.setAttribute("aria-selected", false));
  TitanLink.setAttribute("aria-selected", true);  
  destination.querySelector("picture source").srcset = data.destinations[3].images.webp;
  destination.querySelector("picture img").src = data.destinations[3].images.png; 
  destination.querySelector("picture img").alt = data.destinations[3].name;
  destinationArticle.querySelector("h2").textContent = data.destinations[3].name;
  destinationArticle.querySelector("p").textContent = data.destinations[3].description; 
  destinationArticle.querySelector(".destination-meta > div:first-of-type > p").textContent = data.destinations[3].distance;
  destinationArticle.querySelector(".destination-meta > div:last-of-type > p").textContent = data.destinations[3].travel;
});