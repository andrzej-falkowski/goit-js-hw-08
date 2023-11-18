import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(element) {
  return element
    .map(
      ({ preview, original, description }) =>
        `<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox('ul.gallery a', {
captionPosition:'bottom',
captionDelay: 250,
captionsData: 'alt'});