import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class = "gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
    </a>
    </div>
    `;
  })
  .join("");

gallery.innerHTML = galleryMarkup;

const createLightbox = (event) => {
  const targetImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${targetImgUrl}">`);

  instance.show(
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    })
  );
};

const onGalleryImgClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  createLightbox(event);
};

gallery.addEventListener("click", onGalleryImgClick);
