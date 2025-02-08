document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// const scrollContainer = document.querySelector('.scrolling-wrapper');

// function scrollLeft() {
//     scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
// }

// function scrollRight() {
//     scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
// }