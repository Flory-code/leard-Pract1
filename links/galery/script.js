document.addEventListener('DOMContentLoaded', () => {
    const sliderImage = document.getElementById('slider-image');
    const slideInfo = document.getElementById('slide-info');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const images = [
        'img/a1.jpg',
        'img/a2.jpg',
        'img/a3.jpg',
        'img/a4.jpg',
    ];

    const descriptions = [
        'Крутые персы.',
        '3 крутых перса.',
        'Много крутых персов.',
        'Описание для четвертого изображения.',
    ];

    let currentIndex = 0;

    function updateSlider() {
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            sliderImage.src = images[currentIndex];
            sliderImage.classList.remove('fade-out');
            sliderImage.classList.add('fade-in');
            setTimeout(() => {
                sliderImage.classList.remove('fade-in');
            }, 500);
            slideInfo.textContent = `${currentIndex + 1} слайд из ${images.length}: ${descriptions[currentIndex]}`;
        }, 500);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
});
