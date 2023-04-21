const handleTouchMove = (event: Event) => {
  event.preventDefault();
};

// Scroll Prohibited
export const removeScroll = () => {
  document.addEventListener("touchmove", handleTouchMove, { passive: false });
};

//Scroll Back
export const addScroll = () => {
  document.removeEventListener("touchmove", handleTouchMove);
};
