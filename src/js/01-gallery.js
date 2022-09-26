// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";

// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from './gallery-items';
// Change code below this line

const ulRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
             src="${preview}" 
             alt="${description}" />
                    </a>`;
        })
        .join('');
}
const imageGallery = createGallery(galleryItems);
ulRef.insertAdjacentHTML("afterbegin", imageGallery);

ulRef.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    Simplelightbox.show();
    SimpleLightbox.createDomNodes();
});
gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});
