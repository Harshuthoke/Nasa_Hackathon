// Initialize GSAP
const { gsap } = window;

// Function to animate the images
function animateImages() {
    const images = document.querySelectorAll('.image-container img');
    gsap.from(images, {
        opacity: 0,
        duration: 1,
        stagger: 0.5, // Delay between each image
    });
}

// Call the animation function when the window is fully loaded
window.addEventListener('load', animateImages);
