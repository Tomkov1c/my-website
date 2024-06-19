document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    const content = document.getElementById("content");
    const headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
    
    // Create TOC links
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.innerHTML = heading.textContent + "<span></span>";
        link.dataset.type = heading.tagName.toLowerCase(); // For styling based on heading level
        toc.appendChild(link);
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
        rootMargin: "-25% 0px -85% 0px", // Adjust to determine when the section is considered active
        threshold: 0
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });
});
