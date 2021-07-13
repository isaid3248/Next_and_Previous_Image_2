const imageEl = document.getElementsByTagName("img")[0];
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const numberEl = document.getElementsByTagName("span")[0];

console.log(imageEl, nextButton, previousButton, numberEl);

let number = 0;

const resimDizisi = [
    "./twitter.png",
    "./instagram.jpg",
    "./linkedin.png",
    "./google.png",
    "./facebook.png",
    "./apple.jpg",
];

console.log(resimDizisi.length);

previousButton.addEventListener("click", () => {
    number--;
    if (number < 0) number = number + 6;
    numberEl.innerHTML = number + 1;
    imageEl.src = resimDizisi[number];
    console.log(number);
});

nextButton.addEventListener("click", () => {
    number++;
    number = number % 6;
    numberEl.innerHTML = number + 1;
    imageEl.src = resimDizisi[number];
    console.log(number);
});