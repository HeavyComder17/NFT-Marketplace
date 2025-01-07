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








