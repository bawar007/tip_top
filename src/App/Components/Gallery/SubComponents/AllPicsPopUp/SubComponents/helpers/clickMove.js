export const clickBack = (picIndex, allPicGalleryPop) => {
  const elements = document.querySelectorAll(".Photos_Box--SinglePhoto");
  const ScrollIndexMove = picIndex - 1;
  const lastScrollElement = allPicGalleryPop[0].all.length - 1;
  if (picIndex === 0) {
    elements[lastScrollElement].scrollIntoView();
  } else {
    elements[ScrollIndexMove].scrollIntoView();
  }
};

export const clickNext = (picIndex, allPicGalleryPop) => {
  const elements = document.querySelectorAll(".Photos_Box--SinglePhoto");
  const ScrollIndexMove = picIndex + 1;
  const scrollElementsLength = allPicGalleryPop[0].all.length - 1;
  if (scrollElementsLength <= picIndex) {
    elements[0].scrollIntoView();
  } else {
    elements[ScrollIndexMove].scrollIntoView();
  }
};
