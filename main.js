// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar-nav a.nav-link");
    
    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('night-mode-toggle');
    const body = document.body;

    // Function to toggle night mode
    function toggleNightMode() {
        body.classList.toggle('night-mode');
    }

    // Add click event listener to the night mode toggle button/icon
    nightModeToggle.addEventListener('click', toggleNightMode);
});
