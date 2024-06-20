document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    const content = document.getElementById("content");
    const headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6");

    // Create TOC links
    headings.forEach((heading, index) => {
        const id = heading.textContent;
        heading.id = id;
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.innerHTML = heading.textContent + "<span></span>";
        link.dataset.type = heading.tagName.toLowerCase();
        toc.appendChild(link);

        // Add smooth scrolling to TOC links
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetElement = document.getElementById(id);

            // Calculate the top position of the element relative to the viewport
            const elementTop = targetElement.getBoundingClientRect().top;
            const elementHeight = targetElement.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate the scroll position to center the element
            const scrollPosition = window.scrollY + elementTop - (viewportHeight / 4) + (elementHeight / 4);

            // Smoothly scroll to the calculated position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section
    const links = toc.querySelectorAll("a");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.remove("active"));
                const activeLink = toc.querySelector(`a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, {
        rootMargin: "-25% 0px -75% 0px", // Adjust to determine when the section is considered active
        threshold: 0
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });
});




document.getElementById('title').innerHTML = document.getElementById('documentTitle').innerHTML;

function isElementInViewport(element) {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const isVisible = (
        rect.bottom <= 0 ||
        rect.right <= 0 ||
        rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.left >= (window.innerWidth || document.documentElement.clientWidth)
    );

    return isVisible;
}

window.onscroll = function() {visibility()};

// window.setInterval( function(){
//     visibility();
// },50)

function visibility() {
    element = document.getElementById('documentTitle');
    if (isElementInViewport(element)) {
        document.getElementById('title').classList.add("visible");
    } else {
        document.getElementById('title').classList.remove("visible");
    }
    // element = document.getElementById('documentTitle');
    // if (isElementInViewport(element)) {
    //     document.getElementById('banner').classList.add("visible");
    // } else {
    //     document.getElementById('banner').classList.remove("visible");
    // }
}