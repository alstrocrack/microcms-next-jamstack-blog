function handleTouchMove(event) {
    event.preventDefault();
}

// スクロール禁止
export function removeScroll() {
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
}

//スクロール復帰
export function addScroll() {
    document.removeEventListener('touchmove', handleTouchMove, { passive: false });
}