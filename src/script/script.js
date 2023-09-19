import { setChildren } from 'redom';
import { card }  from './create.js';
import {
  numberInputKeyDownHandler,
  numberInputInputHandler,
  expiryInputKeyDownHandler,
  expiryInputInputHandler,
  cvvInputInputHandler,
} from './mask.js';

import {checkOut} from "./checkOut";

const regExp = () => {
    const inputHolder = document.querySelector('.input__holder');
    const cardName = document.querySelector('.card__name');
    const inputNumber = document.querySelector('.input__number');
    const cardNumber = document.querySelector('.card__number');
    const inputExipry = document.querySelector('.input__date');
    const cardDate = document.querySelector('.card__date');
    const cvvInput = document.querySelector('.input__cvv');

    inputNumber.addEventListener('keydown', numberInputKeyDownHandler);
    inputNumber.addEventListener('input', numberInputInputHandler);

    inputExipry.addEventListener('keydown', expiryInputKeyDownHandler);
    inputExipry.addEventListener('input', expiryInputInputHandler);
    cvvInput.addEventListener('input', cvvInputInputHandler);

    inputHolder.addEventListener('input', () => {
      inputHolder.value = inputHolder.value.replace(/[А-ЯЁ]/gi, '');
      cardName.textContent = inputHolder.value;
    });

    inputNumber.addEventListener('input', () => {
      cardNumber.innerHTML = inputNumber.value;
    });

    inputExipry.addEventListener('input', () => {
      cardDate.innerHTML = inputExipry.value;
    });
};

setChildren(document.body, card());
regExp();
checkOut('Данные валидны');
