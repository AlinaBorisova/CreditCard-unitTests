export const checkCardHolder = (holderInputUser) => {
    const test = holderInputUser.toString();
    const validate = /^([A-Za-z]{3,})\s([A-Za-z]{3,})$/g;
    const result = test.replace(/\^[A-Za-z]/g, '');

    if (!validate.test(test)) {
        return 'Name is not correct';
    }

    return result;
};

export const checkCardNumber = (cardNumber) => {
    const test = cardNumber.toString();
    const validate = /\d/g;
    const result = test.replace(/\D+/g, '');

    if (!validate.test(test)) {
        return 'Number is not correct';
    }

    return result;
};

export const checkCardNumberCount = (numberCard) => {
    const test = numberCard.toString();
    const validate = /^[0-9-]{16}/g;
    const result = test.replace(/\D+/g, '');

    if (!validate.test(test) || result.length !== 16) {
        return 'Number is not correct';
    }

    return result;
};

export const checkCardCvvCount = (cvv) => {
    const test = cvv.toString();
    const validate = /^[0-9]{3}$/g;
    const result = test.replace(/\D+/g, '');

    if (!validate.test(test) || result.length !== 3) {
        return 'CVV is not correct';
    }

    return result;
};

export const checkCardCvv = (cvv) => {
    const test = cvv.toString();
    const validate = /^[0-9]{3}$/g;
    const result = test.replace(/\D+/g, '');

    if (!validate.test(test)) {
        return 'CVV is not correct';
    }

    return result;
};

