// Select the carousel track
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');

// Total number of images
const totalImages = images.length;

// Current image index
let currentIndex = 0;

// Function to move the carousel
function autoSlide() {
    const imageWidth = images[0].clientWidth; // Get the width of each image

    // Increment the index to slide to the next image
    currentIndex = (currentIndex + 1) % totalImages;

    // Move the carousel track to the next image
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Set up auto-slide to move every 3 seconds
setInterval(autoSlide, 3000);

// Adjust carousel on window resize
window.addEventListener('resize', () => {
    const imageWidth = images[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});
