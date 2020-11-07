'use strict';
(() => {
  document.body.onload = () => {

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('modal__button')) {
        window.serviceTitle = document.querySelector('.popup--payment .popup__text .send-title').textContent;
        window.servicePrice = document.querySelector('.popup--payment .popup__price').textContent;
      }
    });

    document.querySelectorAll(`form`).forEach(function (item) {
      item.addEventListener(`submit`, async function (e) {
        e.preventDefault();

        const fd = new FormData()

        if (e.target.classList.contains(`popup__form--call`)) {
          fd.append(`name`, document.querySelector(`#name-request-call`).value);
          fd.append(`phone`, document.querySelector(`#phone-request-call`).value);
        } else if (e.target.classList.contains(`popup__form--payment`)) {
          fd.append('title', window.serviceTitle);
          fd.append('price', window.servicePrice);
          fd.append(`name`, document.querySelector(`#name-payment`).value);
          fd.append(`phone`, document.querySelector(`#phone-payment`).value);
          fd.append(`email`, document.querySelector(`#email-payment`).value);
        }

        const request = await fetch(send, {
          method: `POST`,
          body: fd
        })

        window.response = await request.json();
        const popupAfter = document.querySelector(".popup--call .popup__after");
        const popupPayment = document.querySelector(".popup--payment");
        let body = document.querySelector(`body`);
        let header = document.querySelector(`.header`);
        let main = document.querySelector(`.main`);
        let footer = document.querySelector(`.footer`);

        function onPopupEscPress(e) {
          if (e.key === `Escape`) {
            e.preventDefault();
            if (!popupPayment.classList.contains(`visually-hidden`)) {
              popupPayment.inert = true;
              popupPayment.classList.add(`visually-hidden`);
              popupText.textContent = ``;
              popupPrice.textContent = ``;
            }
            closePopup();
          }
        }

        function closePopup() {
          body.classList.remove(`inert-body`);
          header.inert = false;
          main.inert = false;
          footer.inert = false;
          document.removeEventListener(`keydown`, onPopupEscPress);
        }

        if (response.success) {
          if (e.target.classList.contains('popup__form--call')) {
            popupAfter.classList.remove(`visually-hidden`);
          } else if (e.target.classList.contains('popup__form--payment')) {
            body.classList.remove(`inert-body`);
            popupPayment.classList.add(`visually-hidden`);
            header.inert = false;
            main.inert = false;
            footer.inert = false;
            document.removeEventListener(`keydown`, onPopupEscPress);
          }
        }
      })
    })
  }
})();
//# sourceMappingURL=mail.min.js.map
