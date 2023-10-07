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
