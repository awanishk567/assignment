const images = [
    { id: 1, src: "https://images.pexels.com/photos/3828094/pexels-photo-3828094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 1" },
    { id: 2, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 2" },
    { id: 3, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 3" },
    { id: 4, src: "https://images.pexels.com/photos/10768839/pexels-photo-10768839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 4" },
    { id: 5, src: "https://images.pexels.com/photos/3591557/pexels-photo-3591557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 5" },
    { id: 6, src: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 6" },
    { id: 7, src: "https://images.pexels.com/photos/10399172/pexels-photo-10399172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 7" },
    { id: 8, src: "https://images.pexels.com/photos/2581847/pexels-photo-2581847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 8" },
    { id: 9, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 9" },
    { id: 10, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 10" },
    { id: 11, src: "https://images.pexels.com/photos/4389990/pexels-photo-4389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
    { id: 12, src: "https://images.pexels.com/photos/25798279/pexels-photo-25798279/free-photo-of-man-and-woman-looking-at-arcade-game.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
    { id: 1, src: "https://images.pexels.com/photos/3828094/pexels-photo-3828094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 1" },
    { id: 2, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 2" },
    { id: 3, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 3" },
    { id: 4, src: "https://images.pexels.com/photos/10768839/pexels-photo-10768839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 4" },
    { id: 5, src: "https://images.pexels.com/photos/3591557/pexels-photo-3591557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 5" },
    { id: 6, src: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 6" },
    { id: 7, src: "https://images.pexels.com/photos/10399172/pexels-photo-10399172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 7" },
    { id: 8, src: "https://images.pexels.com/photos/2581847/pexels-photo-2581847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 8" },
    { id: 9, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 9" },
    { id: 10, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 10" },
    { id: 11, src: "https://images.pexels.com/photos/4389990/pexels-photo-4389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
    { id: 12, src: "https://images.pexels.com/photos/25798279/pexels-photo-25798279/free-photo-of-man-and-woman-looking-at-arcade-game.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
    { id: 1, src: "https://images.pexels.com/photos/3828094/pexels-photo-3828094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 1" },
    { id: 2, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 2" },
    { id: 3, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 3" },
    { id: 4, src: "https://images.pexels.com/photos/10768839/pexels-photo-10768839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 4" },
    { id: 5, src: "https://images.pexels.com/photos/3591557/pexels-photo-3591557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 5" },
    { id: 6, src: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 6" },
    { id: 7, src: "https://images.pexels.com/photos/10399172/pexels-photo-10399172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 7" },
    { id: 8, src: "https://images.pexels.com/photos/2581847/pexels-photo-2581847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 8" },
    { id: 9, src: "https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 9" },
    { id: 10, src: "https://images.pexels.com/photos/3022413/pexels-photo-3022413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 10" },
    { id: 11, src: "https://images.pexels.com/photos/4389990/pexels-photo-4389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
    { id: 12, src: "https://images.pexels.com/photos/25798279/pexels-photo-25798279/free-photo-of-man-and-woman-looking-at-arcade-game.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Sample image 12" },
];

const imageGrid = document.getElementById('image-grid');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const popup = document.getElementById('image-popup');
const popupMainImage = document.getElementById('popup-main-image');
const suggestedImages = document.getElementById('suggested-images');
const closePopup = document.getElementById('close-popup');

function renderImages() {
    imageGrid.innerHTML = '';
    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" data-id="${image.id}">
            
        `;
        // <div class="image-overlay">
        //     </div>
        imageItem.addEventListener('click', () => openPopup(image));
        imageGrid.appendChild(imageItem);
    });
}

function openPopup(image) {
    popupMainImage.src = image.src;
    popupMainImage.alt = image.alt;

    suggestedImages.innerHTML = '';
    const suggestedCount = Math.min(15, images.length - 1);
    const shuffled = images.filter(img => img.id !== image.id).sort(() => 0.5 - Math.random());
    shuffled.slice(0, suggestedCount).forEach(suggestedImage => {
        const img = document.createElement('img');
        img.src = suggestedImage.src;
        img.alt = suggestedImage.alt;
        img.className = 'suggested-image';
        img.addEventListener('click', () => openPopup(suggestedImage));
        suggestedImages.appendChild(img);
    });

    popup.style.display = 'block';
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Searching for:', searchInput.value);
    // Here you would typically fetch images based on the search term
});

renderImages();