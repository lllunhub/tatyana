(() => {
  const navOpen = document.querySelector(`.header__menu`);
  const navOpenIcon = document.querySelector(`.header__menu-icon`);
  const nav = document.querySelector(`.nav`);

  nav.inert = true;

  function onNavEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closeNav();
    }
  }

  function openNav() {
    navOpenIcon.style.color = `#d84727`;
    nav.classList.remove(`visually-hidden`);
    nav.inert = false;
    document.addEventListener(`keydown`, onNavEscPress);
  }

  function closeNav() {
    navOpenIcon.style.color = `#22181c`;
    nav.classList.add(`visually-hidden`);
    nav.inert = true;
    document.removeEventListener(`keydown`, onNavEscPress);
  }

  navOpen.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (nav.classList.contains(`visually-hidden`)) {
      openNav();
    } else {
      closeNav();
    }
  });

  document.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`nav__link`)) {
      closeNav();
    }
  });
})();
