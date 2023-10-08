const contentContainer = document.getElementById("content-container");

// Function to load content
function loadContent(contentUrl) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Initially load the first content
loadContent("impact.html");

// Listen for scroll events
window.addEventListener("scroll", function() {
    // Determine when to load the next content (e.g., when user scrolls past a certain point)
    const scrollThreshold = 1000; // Adjust this value as needed
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
        // Load the next content (e.g., section2.html)
        loadContent("section2.html");
    }
});
