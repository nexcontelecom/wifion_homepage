function safariScroll(element) {
  let start = 0;
  const targetTop = element && element ? element.getBoundingClientRect().top : 0;
  const firstPos = window.pageYOffset - 80 || document.documentElement.scrollTop;
  let currentPos = 0;
  console.log(firstPos);
  function showAnimation(timestamp) {
    if (start === 0) start = timestamp || new Date.getTime();
    const elapsed = timestamp - start;
    const progress = elapsed / 500;

    currentPos = (targetTop === 0) ? (firstPos - (firstPos * progress)) : (firstPos + (targetTop * progress));
    window.scrollTo(0, currentPos);
    if ((targetTop === 0 && currentPos <= 0) ||
        (targetTop > 0 && currentPos >= firstPos + targetTop) ||
        (targetTop < 0 && currentPos <= firstPos + targetTop)
        ) {
          cancelAnimationFrame(start);
          currentPos = 0;
          return;
        } 
    window.requestAnimationFrame(showAnimation);
  }
  window.requestAnimationFrame(showAnimation);
}