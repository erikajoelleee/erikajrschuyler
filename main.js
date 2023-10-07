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

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Find the Resume link by its ID
    const resumeLink = document.getElementById("resume-link");

    // Check if the link exists
    if (resumeLink) {
        // Trigger a click event on the link
        resumeLink.click();
    }
});
