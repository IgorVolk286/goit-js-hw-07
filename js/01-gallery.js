import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();

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
      data-source="${original}"
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

ulGallery.addEventListener("click", onGallaryClick);

function onGallaryClick(event) {
  event.preventDefault();
  const card = event.target.closest(".gallery__image");
  // console.log(card);
  if (!card) {
    return;
  } else {
    const data = findCard(card);
    const instance = basicLightbox.create(creatModalMarkUp(data));
    instance.show();
  }
}

function findCard(card) {
  const { source } = card.dataset;
  const currentCard = galleryItems.find(({ original }) => original === source);

  return currentCard;
}

function creatModalMarkUp({ original, description }) {
  return `<div>
  <img src="${original}"
   alt = "${description}"/>
  </div >`;
}
