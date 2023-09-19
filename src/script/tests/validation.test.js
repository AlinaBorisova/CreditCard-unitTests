import {
    checkCardHolder,
    checkCardNumber,
    checkCardNumberCount,
    checkCardCvvCount,
    checkCardCvv,
} from "./validation.js";

describe('Validation Card Holder', () => {

    it('To string', () => {
        expect(checkCardHolder('Alan Griht')).toBe('Alan Griht');
        expect(checkCardHolder(677)).toBe('Name is not correct');
        expect(checkCardHolder('Peter Parker')).toMatch(/^([A-Za-z]{3,})\s([A-Za-z]{3,})$/g)
    });

    it('one word', () => {
        expect(checkCardHolder('Alan Griht')).toBe('Alan Griht');
        expect(checkCardHolder('Frank Castle')).toBe('Frank Castle');
        expect(checkCardHolder('Sara')).toBe('Name is not correct');
        expect(checkCardHolder('Oliver')).toBe('Name is not correct');
    });

    it('if cyrillic', () => {
        expect(checkCardHolder('Alan Griht')).toBe('Alan Griht');
        expect(checkCardHolder('Игорь Севостьянов')).toBe('Name is not correct');
        expect(checkCardHolder('Светлана')).toBe('Name is not correct');
    });

    it('If get number', () => {
        expect(checkCardHolder('Alan Griht')).toBe('Alan Griht');
        expect(checkCardHolder('Oliver Green 4')).toBe('Name is not correct');
        expect(checkCardHolder('444 88888')).toBe('Name is not correct');
    });

});

describe('Validation Card Number', () => {
    test('if number', () => {
        expect(checkCardNumber(6786767)).toBe('6786767');
        expect(checkCardNumber(6786767)).toMatch(/\d/g);
        expect(checkCardNumber('67-867-67')).toBe('6786767');
    });

    test('If cyrillic', () => {
        expect(checkCardNumber('Светлана')).toBe('Number is not correct');
        expect(checkCardNumber('Игорь Власов')).toBe('Number is not correct');
    });

    test('If latin', () => {
        expect(checkCardNumber('Oliver Green')).toBe('Number is not correct');
        expect(checkCardNumber('Alan')).toBe('Number is not correct');
    });

    test('If punctuation marks', () => {})
        expect(checkCardNumber('...')).toBe('Number is not correct');
        expect(checkCardNumber(',')).toBe('Number is not correct');
        expect(checkCardNumber('?')).toBe('Number is not correct');

});

describe('Validation for count numbers in input', () => {
    it('Count numbers', () => {
        expect(checkCardNumberCount('6344634634646325')).toBe('6344634634646325');
        expect(checkCardNumberCount('6344-6346-3464-6325')).toBe('6344634634646325');
        expect(checkCardNumberCount('634463463464632')).toBe('Number is not correct');
        expect(checkCardNumberCount('6344 6346 3464 6')).toBe('Number is not correct');
        expect(checkCardNumberCount('6344 6346 3464 6321 78')).toBe('Number is not correct');
        expect(checkCardNumberCount('6344-6346-3464-6325')).toMatch(/^\d{16}$/g);
        expect(checkCardNumberCount('6344634634646325')).toMatch(/^[0-9]{16}$/g);
    });
});

describe('Validation CVV count', () => {
    it('if cvv count < or > 3', () => {
        expect(checkCardCvvCount('12')).toBe('CVV is not correct');
        expect(checkCardCvvCount('1234')).toBe('CVV is not correct');
        expect(checkCardCvvCount('123')).toEqual('123');
        expect(checkCardCvvCount(123)).toBe('123');
        expect(checkCardCvvCount('123')).toMatch(/^[0-9]{3}$/g)
    });
});

describe('Validation CVV', () => {
    it('if latin', () => {
        expect(checkCardCvv('asd')).toBe('CVV is not correct');
        expect(checkCardCvv('uihmv')).toBe('CVV is not correct');
        expect(checkCardCvv('123')).toBe('123');
    });

    it('if cyrillic', () => {
        expect(checkCardCvv('привет')).toBe('CVV is not correct');
        expect(checkCardCvv('мир')).toBe('CVV is not correct');
        expect(checkCardCvv('123')).toBe('123');
    });

    it('if punctuation marks', () => {
        expect(checkCardCvv('привет????')).toBe('CVV is not correct');
        expect(checkCardCvv('мир,,')).toBe('CVV is not correct');
        expect(checkCardCvv('123')).toBe('123');
    });
});
