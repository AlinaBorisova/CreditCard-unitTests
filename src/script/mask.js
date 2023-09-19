const numberPattern = /^\d{0,16}$/g;
const numberSeparator = " ";
let numberInputOldValue;
let numberInputOldCursor;

const expiryPattern = /^\d{0,4}$/g;
const expirySeparator = "/";
let expiryInputOldValue;
let expiryInputOldCursor;
		
const mask = (value, limit, separator) => {
  let output = [];
    for (let i = 0; i < value.length; i++) {
      if ( i !== 0 && i % limit === 0) {
        output.push(separator);
      }
      output.push(value[i]);
    }

    return output.join("");
};
const unmask = (value) => value.replace(/[^\d]/g, '');
const checkSeparator = (position, interval) => Math.floor(position / (interval + 1));
export const numberInputKeyDownHandler = (e) => {
  let el = e.target;
  numberInputOldValue = el.value;
  numberInputOldCursor = el.selectionEnd;
};
export const numberInputInputHandler = (e) => {
  let el = e.target;
  let newValue = unmask(el.value);
  let newCursorPosition;
    
  if (newValue.match(numberPattern)) {
    newValue = mask(newValue, 4, numberSeparator);
        
    newCursorPosition = 
      numberInputOldCursor - checkSeparator(numberInputOldCursor, 4) + 
      checkSeparator(numberInputOldCursor + (newValue.length - numberInputOldValue.length), 4) + 
      (unmask(newValue).length - unmask(numberInputOldValue).length);
        
    el.value = (newValue !== "") ? newValue : "";
  } else {
      el.value = numberInputOldValue;
      newCursorPosition = numberInputOldCursor;
  }
    
  el.setSelectionRange(newCursorPosition, newCursorPosition);
};   

export const cvvInputInputHandler = (e) => {
  let el = e.target;
  let limitCvv = 3;
  el.value = unmask(el.value);

  if (el.value.length >= limitCvv) {
    el.value = el.value.substring(0, limitCvv);
  }
};

export const expiryInputKeyDownHandler = (e) => {
  let el = e.target;
  expiryInputOldValue = el.value;
  expiryInputOldCursor = el.selectionEnd;
};
export const expiryInputInputHandler = e => {
  const el = e.target;
  let newValue = el.value;
    
  newValue = unmask(newValue);
  if (newValue.match(expiryPattern)) {
    newValue = mask(newValue, 2, expirySeparator);
    el.value = newValue;
  } else {
    el.value = expiryInputOldValue;
  }
};
