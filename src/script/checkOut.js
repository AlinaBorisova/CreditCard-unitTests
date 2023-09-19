export const checkOut = (result) => {
    const button = document.querySelector('.form__button');
    const checkedOutput = document.querySelector('.checkedOutput');

    button.addEventListener('click', () => {
        checkedOutput.textContent = result;
        setTimeout(() => {
            checkedOutput.textContent = '';
        }, 2000);
    });
};






