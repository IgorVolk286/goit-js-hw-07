import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const ulGallery = document.querySelector(".gallery");
// console.log(ulGallery);

function createMarckup(arr) {
  const marckUp = arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item" >
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    alt="${description}"
    />
  </a>
</li>`
    )
    .join(" ");
  return marckUp;
}

ulGallery.insertAdjacentHTML("beforeend", createMarckup(galleryItems));
// console.log(createMarckup(gtalleryItems));

// ulGallery.addEventListener("click", onGallaryClick);

// function onGallaryClick(event) {
//   event.preventDefault();

//   console.log(event.target.dataset);
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
