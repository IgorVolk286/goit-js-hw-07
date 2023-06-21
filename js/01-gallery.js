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

  console.log(event.target.dataset);
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const { source } = event.target.dataset;

  const instance = basicLightbox.create(
    `<div>
   <img src="${source}"
    />
   </div >`,
    {
      onShow: (instance) => window.addEventListener("keydown", onEscPress),
      onClose: (instance) => window.removeEventListener("keydown", onEscPress),
    }
  );
  instance.show();

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close(() => console.log("lightbox not visible anymore"));
      console.log(event.code);
    }
  }
}
