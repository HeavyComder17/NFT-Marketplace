// Slider Button
document.addEventListener("DOMContentLoaded", () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    const showSlide = (index) => {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});



document.addEventListener("DOMContentLoaded", () => {
    const sliderItems = document.querySelectorAll('.art-carousel');
    let currentIndex = 0;

    const showSlide = (index) => {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    document.querySelector('.art-carousel-btn art-left-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.art-carousel-btn art-right-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});



// Treding Buttons
document.getElementById('art-button-scroll').addEventListener('click', function() {
    const targetSection = document.querySelector('.art-section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('gaming-button-scroll').addEventListener('click', function() {
    const targetSection = document.querySelector('.gaming-section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('photography-button-scroll').addEventListener('click', function() {
    const targetSection = document.querySelector('.photography-section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('music-button-scroll').addEventListener('click', function() {
    const targetSection = document.querySelector('.music-section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});








const searchInput = document.querySelector(".search-bar input");

const placeholders = ["items...", "collections...", "accounts..."];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;
let typingSpeed = 50; // Speed of typing
let backspaceSpeed = 70; // Speed of backspacing
let delayBetweenWords = 2000; // Delay before deleting
let loopDelay = 0; // Delay before next word starts

function typeEffect() {
    const baseText = "Search "; // Always keep "Search" fixed

    if (isDeleting) {
        currentText = placeholders[currentIndex].substring(0, charIndex--);
    } else {
        currentText = placeholders[currentIndex].substring(0, charIndex++);
    }

    searchInput.setAttribute("placeholder", baseText + currentText);

    if (!isDeleting && charIndex === placeholders[currentIndex].length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords); // Wait before backspacing
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % placeholders.length;
        setTimeout(typeEffect, loopDelay); // Wait before typing new word
    } else {
        setTimeout(typeEffect, isDeleting ? backspaceSpeed : typingSpeed);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("ul li");

    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            menuItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.add("blurred");
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            menuItems.forEach((otherItem) => {
                otherItem.classList.remove("blurred");
            });
        });
    });
});




