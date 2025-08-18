// Slideshow for Gallery
let slideIndex = 0;
const pictures = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg"
];

let slideshow = document.getElementById("slideshow");
let autoSlide;

// Show a specific slide (for thumbnails)
function showSlide(index) {
    slideIndex = index;
    slideshow.src = "images/" + pictures[slideIndex];
    resetAutoSlide();
}

// Next button
function nextSlide() {
    slideIndex = (slideIndex + 1) % pictures.length;
    showSlide(slideIndex);
}

// Prev button
function prevSlide() {
    slideIndex = (slideIndex - 1 + pictures.length) % pictures.length;
    showSlide(slideIndex);
}

// Auto slideshow
function startAutoSlide() {
    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);
}

// Reset auto timer when buttons/thumbnails are used
function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Start on page load
window.onload = () => {
    showSlide(0);
    startAutoSlide();
};
