const MAX_NUMBER = 10;
const MIN_VALUE = -2;
const STEP_AMOUNT = 2;

const number = document.querySelector('[data-key="number"]');
const addButton = document.querySelector('[data-key="add"]');
const minusButton = document.querySelector('[data-key="minus"]');

// Functions

// Learnt: that all DOM elements are essentially string and needs to be converted to a number
// number.toString() => To turn a string into a number

const add = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (number.disabled === true) {
    addButton.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    addButton.disabled = true;
  }
};
const deleteNumber = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (minusButton.disabled === true) {
    minusButton.disabled = false;
  }

  if (newValue <= MIN_VALUE) {
    minusButton.disabled = true;
  }
};

addButton.addEventListener("click", add);
minusButton.addEventListener("click", deleteNumber);
