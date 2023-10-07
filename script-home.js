// JavaScript for horizontal scrolling with scroll wheel

document.addEventListener("DOMContentLoaded", function () {
    const horizontalScrollContainer = document.querySelector(
        ".horizontal-scroll-container"
    );

    horizontalScrollContainer.addEventListener("wheel", function (e) {
        e.preventDefault();
        const scrollSpeed = 30; // Adjust the scroll speed as needed

        // Determine the direction of the scroll (left or right)
        const direction = e.deltaY > 0 ? 1 : -1;

        // Scroll horizontally
        horizontalScrollContainer.scrollLeft += direction * scrollSpeed;
    });
});
