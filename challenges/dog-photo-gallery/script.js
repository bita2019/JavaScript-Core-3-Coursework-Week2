// console.log("Begining of the code");
// setTimeout(() => consoleo.log("Inside"));
// console.log("End");

// console.log("Begining of");

// let promise = fetch('https://dog.ceo/api/breeds/image/random');
// console.log('inside the promise');

const image = document.createElement("img");
const bodyEl = document.querySelector("body");
const showPicBtn = document.getElementById("newPicBtn");
const ulEl = document.querySelector("ul");
const liEl = document.createElement("li");
ulEl.appendChild(liEl);

liEl.appendChild(image);

showPicBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
    })
    .catch((err) => console.log(err));
});
