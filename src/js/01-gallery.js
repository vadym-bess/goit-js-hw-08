// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");

let galleryList = ``;

function initGallery() {

    galleryItems.forEach(element => {
         galleryList += `<a class="gallery__item" href="${element.original}">
                        <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
                        </a>`;
    });
    galleryEl.innerHTML = galleryList;

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

};

initGallery();


