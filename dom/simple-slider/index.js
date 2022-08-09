const slider = document.querySelector(".slider");
const sliderList = document.querySelector(".slider__list");
const sliderItem = document.querySelector(".slider__item");
const sliderWrap = document.querySelector(".slider__wrap");

const sliderPrev = document.querySelector(".slider__prev");
const sliderNext = document.querySelector(".slider__next");

let current = 0;

function canScrollTo(idx) {
  if (idx >= sliderList.children.length || idx < 0) return false;

  const item = sliderList.children[idx];
  if (!item) return false;

  const itemRect = item.getBoundingClientRect();
  const wrapRect = sliderWrap.getBoundingClientRect();
  const length = sliderList.children.length;
  if (length * itemRect.width - idx * itemRect.width < wrapRect.width) {
    return false;
  }

  return true;
}

function scrollTo(idx) {
  const item = sliderList.children[idx];
  if (canScrollTo(idx)) {
    const rect = item.getBoundingClientRect();
    sliderList.style.transform = `translateX(-${current * rect.width}px)`;
  }
}

function scrollToNext() {
  if (canScrollTo(current + 1)) {
    current++;
    scrollTo(current);
  }
}

function scrollToPrev() {
  if (canScrollTo(current - 1)) {
    current--;
    scrollTo(current);
  }
}

sliderNext.addEventListener("click", function () {
  scrollToNext();
});

sliderPrev.addEventListener("click", function () {
  scrollToPrev();
});
