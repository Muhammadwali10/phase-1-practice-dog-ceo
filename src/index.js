const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogImageContainer = document.getElementById("dog-image-container");
const breedDropdown = document.getElementById("breed-dropdown");
const dogBreedsList = document.getElementById("dog-breeds");

fetch(imgUrl)
    .then(r => r.json())
    .then(data => data.message.map(url => new Image(url)).forEach(img => dogImageContainer.appendChild(img)))
    .catch(console.error);

fetch(breedUrl)
    .then(r => r.json())
    .then(data => data.message.map(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        return li;
    }).forEach(li => dogBreedsList.appendChild(li)))
    .catch(console.error);

dogBreedsList.addEventListener("click", e => e.target.tagName === "LI" && (e.target.style.color = "blue"));

breedDropdown.addEventListener("change", function () {
    const letter = this.value;
    dogBreedsList.querySelectorAll("li").forEach(li => {
        li.style.display = li.textContent[0].toLowerCase() === letter ? "" : "none";
    });
});

