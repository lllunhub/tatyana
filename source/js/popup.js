(() => {
  let body = document.querySelector(`body`);
  let header = document.querySelector(`.header`);
  let main = document.querySelector(`.main`);
  let footer = document.querySelector(`.footer`);
  let headerCall = header.querySelector(`.header__call`);
  let previewLink = document.querySelector(`.preview__link`);
  let popupButton = document.querySelector(`.popup--payment .popup__button`);
  let popupEmail = document.querySelector(`.popup__input--email`);
  // Заявка
  let popupCall = document.querySelector(`.popup--call`);
  let popupTitle = popupCall.querySelector(`.popup__title`);
  let popupCallClose = popupCall.querySelector(`.popup--call .popup__close`);
  let popupCallAfter = popupCall.querySelector(`.popup--call .popup__after`);
  let popupCloseAfter = popupCall.querySelector(`.popup--call .popup__after-button`);
  // Оплата
  let popupPayment = document.querySelector(`.popup--payment`);
  let popupPaymentClose = popupPayment.querySelector(`.popup--payment .popup__close`);
  let popupText = popupPayment.querySelector(`.popup__text`);
  let popupPrice = popupPayment.querySelector(`.popup__price`);
  // Конфиденциальность
  let decisionConfidentiality = document.querySelector(`.service__decision--confidentiality`);
  let modalConfidentiality = document.querySelector(`.modal--confidentiality`);
  let modalCloseConfidentiality = modalConfidentiality.querySelector(`.modal--confidentiality .modal__close`);
  let modalButton1Confidentiality = modalConfidentiality.querySelector(`.modal--confidentiality .modal__button--1`);
  let modalButton2Confidentiality = modalConfidentiality.querySelector(`.modal--confidentiality .modal__button--2`);
  // Антикоррупция
  let decisionCorruption = document.querySelector(`.service__decision--corruption`);
  let modalCorruption = document.querySelector(`.modal--corruption`);
  let modalCloseCorruption = modalCorruption.querySelector(`.modal--corruption .modal__close`);
  let modalButtonCorruption = modalCorruption.querySelector(`.modal--corruption .modal__button`);
  // Бизнес в онлайн
  let decisionBusinessOnline = document.querySelector(`.service__decision--business-online`);
  let modalBusinessOnline = document.querySelector(`.modal--business-online`);
  let modalCloseBusinessOnline = modalBusinessOnline.querySelector(`.modal--business-online .modal__close`);
  let modalButtonBusinessOnline = modalBusinessOnline.querySelector(`.modal--business-online .modal__button`);
  // Консультация
  let decisionConsult = document.querySelector(`.service__decision--consult`);
  let modalConsult = document.querySelector(`.modal--consult`);
  let modalCloseConsult = modalConsult.querySelector(`.modal--consult .modal__close`);
  let modalButtonConsult = modalConsult.querySelector(`.modal--consult .modal__button`);

  popupCall.inert = true;
  popupPayment.inert = true;
  modalConfidentiality.inert = true;
  modalCorruption.inert = true;
  modalBusinessOnline.inert = true;

  function onPopupEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      if (!popupCall.classList.contains(`visually-hidden`)) {
        popupCall.inert = true;
        popupCallAfter.classList.add(`visually-hidden`);
        popupCall.classList.add(`visually-hidden`);
        popupTitle.textContent = ``;
      } else if (!modalConfidentiality.classList.contains(`visually-hidden`)) {
        modalConfidentiality.inert = true;
        modalConfidentiality.classList.add(`visually-hidden`);
      } else if (!modalCorruption.classList.contains(`visually-hidden`)) {
        modalCorruption.inert = true;
        modalCorruption.classList.add(`visually-hidden`);
      } else if (!modalBusinessOnline.classList.contains(`visually-hidden`)) {
        modalBusinessOnline.inert = true;
        modalBusinessOnline.classList.add(`visually-hidden`);
      } else if (!popupPayment.classList.contains(`visually-hidden`)) {
        popupPayment.inert = true;
        popupPayment.classList.add(`visually-hidden`);
        popupText.textContent = ``;
        popupPrice.textContent = ``;
      } else if (!modalConsult.classList.contains(`visually-hidden`)) {
        modalConsult.inert = true;
        modalConsult.classList.add(`visually-hidden`);
      }
      closePopup();
    }
  }

  function openPopup() {
    body.classList.add(`inert-body`);
    header.inert = true;
    main.inert = true;
    footer.inert = true;
    document.addEventListener(`keydown`, onPopupEscPress);
  }

  function closePopup() {
    body.classList.remove(`inert-body`);
    header.inert = false;
    main.inert = false;
    footer.inert = false;
    document.removeEventListener(`keydown`, onPopupEscPress);
  }

  // Звонки
  headerCall.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    popupCall.inert = false;
    popupCall.classList.remove(`visually-hidden`);
    popupTitle.textContent = `Оставьте заявку`;
  });

  // Заявка
  previewLink.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    popupCall.inert = false;
    popupCall.classList.remove(`visually-hidden`);
    popupTitle.textContent = `Оставьте заявку`;
  });

  // Закрыть звонки/заявку
  popupCallClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    popupCall.inert = true;
    popupCallAfter.classList.add(`visually-hidden`);
    popupCall.classList.add(`visually-hidden`);
    popupTitle.textContent = ``;
  });

  popupCloseAfter.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    popupCall.inert = true;
    popupCallAfter.classList.add(`visually-hidden`);
    popupCall.classList.add(`visually-hidden`);
    popupTitle.textContent = ``;
  });

  // Конфиденциальность
  decisionConfidentiality.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    modalConfidentiality.inert = false;
    modalConfidentiality.classList.remove(`visually-hidden`);
  });

  modalCloseConfidentiality.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    modalConfidentiality.inert = true;
    modalConfidentiality.classList.add(`visually-hidden`);
  });

  // Антикоррупционная деятельность
  decisionCorruption.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    modalCorruption.inert = false;
    modalCorruption.classList.remove(`visually-hidden`);
  });

  modalCloseCorruption.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    modalCorruption.inert = true;
    modalCorruption.classList.add(`visually-hidden`);
  });

  // Бизнес в онлайн
  decisionBusinessOnline.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    modalBusinessOnline.inert = false;
    modalBusinessOnline.classList.remove(`visually-hidden`);
  });

  modalCloseBusinessOnline.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    modalBusinessOnline.inert = true;
    modalBusinessOnline.classList.add(`visually-hidden`);
  });

  // Консультация
  decisionConsult.addEventListener(`click`, (e) => {
    e.preventDefault();
    openPopup();
    modalConsult.inert = false;
    modalConsult.classList.remove(`visually-hidden`);
  });

  modalCloseConsult.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    modalConsult.inert = true;
    modalConsult.classList.add(`visually-hidden`);
  });

  // Оплата конфиденциальнсти
  modalButton1Confidentiality.addEventListener(`click`, (e) => {
    e.preventDefault();
    modalConfidentiality.inert = true;
    modalConfidentiality.classList.add(`visually-hidden`);
    popupText.innerHTML = `<span class="send-tit">Вы получите:</span> <br> Пакет документов <br> <span class="send-title">"«Конфиденциальность вашего бизнеса»</span>`;
    popupPrice.textContent = `1990 Руб.`;
    popupPayment.classList.remove(`visually-hidden`);
    popupPayment.inert = false;

    popupEmail.addEventListener(`input`, () => {
      let valid = popupEmail.checkValidity();
      console.log(valid);

      if (valid) {
        popupButton.addEventListener(`click`, () => {
          location.href = "https://3dsec.sberbank.ru/payment/docsite/payform-1.html?token=ed7jmmtbgnmvfj57t8j7223alf&def=%7B%22amount%22:%221990.00%22%7D&def=%7B%22description%22:%22%D0%9F%D0%B0%D0%BA%D0%B5%D1%82%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0.%20%D0%94%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D1%8B%D1%85%20%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B9.%20%20%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D0%B2%D1%8B%D1%88%D0%BB%D0%B5%D0%BC%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%20E-Mail.%22%7D&ask=email";
        })
      }
    });
  });

  modalButton2Confidentiality.addEventListener(`click`, (e) => {
    e.preventDefault();
    modalConfidentiality.inert = true;
    modalConfidentiality.classList.add(`visually-hidden`);
    popupText.innerHTML = `<span class="send-tit">Вы получите:</span> <br> Пакет документов <br> <span class="send-title">«Конфиденциальность вашего бизнеса»</span>`;
    popupPrice.textContent = `1490 Руб.`;
    popupPayment.classList.remove(`visually-hidden`);
    popupPayment.inert = false;

    popupEmail.addEventListener(`input`, () => {
      let valid = popupEmail.checkValidity();
      console.log(valid);

      if (valid) {
        popupButton.addEventListener(`click`, () => {
          location.href = "https://3dsec.sberbank.ru/payment/docsite/payform-1.html?token=ed7jmmtbgnmvfj57t8j7223alf&def=%7B%22amount%22:%221490.00%22%7D&def=%7B%22description%22:%22%D0%9F%D0%B0%D0%BA%D0%B5%D1%82%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0.%20%D0%94%D0%BB%D1%8F%20%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B9%20%D1%81%20%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8.%20%20%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D0%B2%D1%8B%D1%88%D0%BB%D0%B5%D0%BC%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%20E-Mail.%22%7D&ask=email";
        })
      }
    });
  });

  // Антикоррупционная деятельность
  modalButtonCorruption.addEventListener(`click`, (e) => {
    e.preventDefault();
    modalCorruption.inert = true;
    modalCorruption.classList.add(`visually-hidden`);
    popupText.innerHTML = `<span class="send-tit">Вы получите:</span> <br> Пакет документов <br> <span class="send-title">«Антикоррупционная деятельность»</span>`;
    popupPrice.textContent = `590 Руб.`;
    popupPayment.classList.remove(`visually-hidden`);
    popupPayment.inert = false;

    popupEmail.addEventListener(`input`, () => {
      let valid = popupEmail.checkValidity();
      console.log(valid);

      if (valid) {
        popupButton.addEventListener(`click`, () => {
          location.href = "https://3dsec.sberbank.ru/payment/docsite/payform-1.html?token=ed7jmmtbgnmvfj57t8j7223alf&def=%7B%22amount%22:%22590.00%22%7D&def=%7B%22description%22:%22%D0%9F%D0%B0%D0%BA%D0%B5%D1%82%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%B0%D0%BD%D1%82%D0%B8%D0%BA%D0%BE%D1%80%D1%80%D1%83%D0%BF%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.%20%20%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D0%B2%D1%8B%D1%88%D0%BB%D0%B5%D0%BC%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%20E-Mail.%22%7D&ask=email";
        })
      }
    });
  });

  // Бизнес в онлайн
  modalButtonBusinessOnline.addEventListener(`click`, (e) => {
    e.preventDefault();
    modalBusinessOnline.inert = true;
    modalBusinessOnline.classList.add(`visually-hidden`);
    popupText.innerHTML = `<span class="send-tit">Вы получите:</span> <br> Пакет документов <br> <span class="send-title">«Бизнес в онлайн»</span>`;
    popupPrice.textContent = `1590 Руб.`;
    popupPayment.classList.remove(`visually-hidden`);
    popupPayment.inert = false;

    popupEmail.addEventListener(`input`, () => {
      let valid = popupEmail.checkValidity();
      console.log(valid);

      if (valid) {
        popupButton.addEventListener(`click`, () => {
          location.href = "https://3dsec.sberbank.ru/payment/docsite/payform-1.html?token=ed7jmmtbgnmvfj57t8j7223alf&def=%7B%22amount%22:%221590.00%22%7D&def=%7B%22description%22:%22%D0%9F%D0%B0%D0%BA%D0%B5%D1%82%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%5C%22%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%20%D0%B2%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%5C%22.%20%20%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D0%B2%D1%8B%D1%88%D0%BB%D0%B5%D0%BC%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%20E-Mail.%22%7D&ask=email";
        })
      }
    });
  });

  // Бизнес в онлайн
  modalButtonConsult.addEventListener(`click`, (e) => {
    e.preventDefault();
    modalConsult.inert = true;
    modalConsult.classList.add(`visually-hidden`);
    popupText.innerHTML = `<span class="send-tit">Вы получите:</span> <br> Пакет документов <br> <span class="send-title">«Консультация
по оптимизации налогов
при работе с площадками
Wildberries, Lamoda, Ozon»</span>`;
    popupPrice.textContent = `1590 Руб.`;
    popupPayment.classList.remove(`visually-hidden`);
    popupPayment.inert = false;

    popupEmail.addEventListener(`input`, () => {
      let valid = popupEmail.checkValidity();
      console.log(valid);

      if (valid) {
        popupButton.addEventListener(`click`, () => {
          location.href = "https://3dsec.sberbank.ru/payment/docsite/payform-1.html?token=ed7jmmtbgnmvfj57t8j7223alf&def=%7B%22amount%22:%221590.00%22%7D&def=%7B%22description%22:%22%D0%9F%D0%B0%D0%BA%D0%B5%D1%82%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%5C%22%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%20%D0%B2%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%5C%22.%20%20%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D0%B2%D1%8B%D1%88%D0%BB%D0%B5%D0%BC%20%D0%BD%D0%B0%20%D0%B2%D0%B0%D1%88%20E-Mail.%22%7D&ask=email";
        })
      }
    });
  });

  // Закрыть оплату
  popupPaymentClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
    popupPayment.inert = true;
    popupPayment.classList.add(`visually-hidden`);
    popupText.textContent = ``;
    popupPrice.textContent = ``;
  });
})();

//# sourceMappingURL=popup.min.js.map
