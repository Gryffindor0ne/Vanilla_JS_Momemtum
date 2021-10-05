const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");

backImage.src = `img/${chosenImages}`;

document.body.appendChild(backImage);
backImage.classList.add("bg-image");
