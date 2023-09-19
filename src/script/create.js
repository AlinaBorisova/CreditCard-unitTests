import {el} from 'redom';
  
export const card = () => {
  const cardName = el('span', {className:'card__name'});
  cardName.textContent = 'John Doe';
  const cardDate = el('span', {className:'card__date'});
  cardDate.textContent = '00/00';
  const cardPersonal = el('div', {className: 'card__personal'}, cardName, cardDate);
  const cardNumber = el('span', {className: 'card__number'});
  cardNumber.textContent = 'xxxx xxxx xxxx xxxx';
  const creditCard = el('div', {className: 'credit-card'}, cardNumber, cardPersonal);
  
  const secure = el('p', {className: 'secure'});
  secure.textContent = 'Secure Checkout';

  const holderLabel = el('label', {className: ('form__label form__holder-label')});
  holderLabel.textContent = 'Card Holder';
  const inputHolder = el('input', {type: 'text'}, {className: 'input input__holder'});
  const formHolder = el('div', {className:'form__input-wrap form__input-wrap_holder'}, 
  holderLabel, inputHolder);

  const NumberLabel = el('label', {className: ('form__label form__number-label')});
  NumberLabel.textContent = 'Card Number';
  const inputNumber = el('input', {className: 'input input__number'}, {id: 'cardNumber'});
  
  const formNumber = el('div', {className:'form__input-wrap form__input-wrap_number'}, 
  NumberLabel, inputNumber);

  const dateLabel = el('label', {className: ('form__label form__date-label')});
  dateLabel.textContent = 'Card Expiry';
  const inputDate = el('input', {className: 'input input__date'}, {type: 'text'});
  const formDate = el('div', {className:'form__input-wrap form__input-wrap_date'}, 
  dateLabel, inputDate);

  const cvvLabel = el('label', {className: ('form__label form__cvv-label')});
  cvvLabel.textContent = 'CVV';
  const inputCvv = el('input', {className: 'input input__cvv'}, {type: 'text'});
  const formCvv = el('div', {className:'form__input-wrap form__input-wrap_cvv'}, 
  cvvLabel, inputCvv);

  const button = el('button', {className: 'form__button'});
  button.textContent = 'CHECK OUT';

  const checkedOutput = el('h3', {className: 'checkedOutput'});

  const form = el('form', {action: '#', className: 'form', id: 'form'}, formHolder, formNumber, 
  formDate, formCvv, button);

  const card = el('div', {className: 'card'}, secure, creditCard, form, checkedOutput);

  return el('div', {className: 'wrapper'}, card);
};