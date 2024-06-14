let currentPosition = 0;
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const visibleImagesCount = 4; 
const imageWidth = images[0].clientWidth +10; 

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);


function moveLeft() {
    if (currentPosition > 0) {
        currentPosition--;
    } else {
        currentPosition = images.length - visibleImagesCount;
        
    }
    updateGalleryPosition();
    toggleActiveArrow(leftArrow);
}

function moveRight() {
    if (currentPosition < images.length - visibleImagesCount) {
        currentPosition++;
    } else {
        currentPosition = 0;
    }
    updateGalleryPosition();
    toggleActiveArrow(rightArrow);
}

function updateGalleryPosition() {
    gallery.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
}


function toggleActiveArrow(arrow) {
    arrow.classList.add('active');
    setTimeout(() => {
        arrow.classList.remove('active');
    }, 200); 
}

let currentPosition6 = 0;
const gallery6 = document.querySelector('.gallery-6');
const images6 = document.querySelectorAll('.gallery-6 img');
const visibleImagesCount6 = 6; // Кількість видимих зображень
const imageWidth6 = images6[0].clientWidth + 20; // ширина зображення + відступи з обох боків (320px + 2*10px = 340px)

const leftArrow6 = document.querySelector('.left-arrow-6');
const rightArrow6 = document.querySelector('.right-arrow-6');

leftArrow6.addEventListener('click', moveLeft6);
rightArrow6.addEventListener('click', moveRight6);

function moveLeft6() {
    if (currentPosition6 > 0) {
        currentPosition6--;
    } else {
        currentPosition6 = images6.length - visibleImagesCount6;
    }
    updateGalleryPosition6();
    toggleActiveArrow6(leftArrow6);
}

function moveRight6() {
    if (currentPosition6 < images6.length - visibleImagesCount6) {
        currentPosition6++;
    } else {
        currentPosition6 = 0;
    }
    updateGalleryPosition6();
    toggleActiveArrow6(rightArrow6);
}

function updateGalleryPosition6() {
    gallery6.style.transform = `translateX(-${currentPosition6 * imageWidth6}px)`;
}

function toggleActiveArrow6(arrow) {
    arrow.classList.add('active');
    setTimeout(() => {
        arrow.classList.remove('active');
    }, 200);
}





