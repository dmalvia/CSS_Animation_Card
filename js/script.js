const cardWrapper = document.querySelector(".cards");

cardWrapper.addEventListener('click', e => {
  const cardMoreBtn = e.target.closest(".card__more-info");
  const cardLessBtn = e.target.closest(".card__less-info");
  
  if(cardMoreBtn) {
    cardMoreBtn.parentNode.parentNode.classList.add('card--open');
  }

  if(cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('card--open');
  }

})