
const carousel = document.getElementById("carousel");

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


for (let i = 0; i < images.length; i++) {
    const currentImage = images[i];
    console.log(currentImage);
    activeClass = "";

    if (i === 0) {
        activeClass = "active"
    }

    // Creo struttura
    carousel.innerHTML += `<div class="image-container ${activeClass}">
    <img src="${currentImage.image}" alt="" class="img">
    <div class="description"><h2>${currentImage.title}</h2> <br> ${currentImage.text}</div>`;

}


// array.forEach(images, i => {
//     const currentImage = images[i];
//     console.log(currentImage)
//     activeClass = "";
//     if (i === 0) {
//         activeClass = "active"
//     }
//     carousel.innerHTML += `<div class="image-container ${activeClass}">
//     <img src="${currentImage.image}" alt="" class="img">
//     <div class="description"><h3>${currentImage.title}</h3> <br> ${currentImage.text}</div>`;
// });


const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
let currentImageIndex = 0;

rightBtn.addEventListener("click", function () {
    right();
});


leftBtn.addEventListener("click", function () {
    left()
});



function right() {
    // querySelectorAll cosi prendo tutti gli elementi
    const imageListElement = document.querySelectorAll(".image-container");

    // rimuovo active all'indice 0
    imageListElement[currentImageIndex].classList.remove("active");

    currentImageIndex++;

    // Ciclo infinito di immagini
    if (currentImageIndex > imageListElement.length - 1) {
        currentImageIndex = 0;
    }

    imageListElement[currentImageIndex].classList.add("active");
}



function left() {
    const imageListElement = document.querySelectorAll(".image-container");

    imageListElement[currentImageIndex].classList.remove("active");

    currentImageIndex--;

    // Ciclo infinito di immagini
    if (currentImageIndex < 0) {
        currentImageIndex = imageListElement.length - 1;
    }

    imageListElement[currentImageIndex].classList.add("active");
}
