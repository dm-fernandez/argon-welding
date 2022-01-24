const CODE_UA = '38';

function formatInputValue(input) {
  return input.value.replace(/\D/g, '');
}

function phoneInputFormat(evt) {
  const currentInput = evt.target;
  const currentInputNumValue = formatInputValue(currentInput);
  const selectionStartInput = currentInput.selectionStart;
  let formattedInputValue = '';

  if (!currentInputNumValue) {
    currentInput.value = '';
    return currentInput.value;
  }

  if (currentInput.value.length !== selectionStartInput) {
    if (evt.data && /\D/g.test(evt.data)) {
      currentInput.value = currentInputNumValue;
    }
    return currentInput.value;
  }

  if (currentInputNumValue.startsWith(CODE_UA)) {
    formattedInputValue = `+${currentInputNumValue.substring(0, 2)} `;
    if (currentInputNumValue.length > 2) {
      formattedInputValue += `(${currentInputNumValue.substring(2, 5)}`;
    } else {
      formattedInputValue += '';
    }
    if (currentInputNumValue.length > 5) {
      formattedInputValue += `) ${currentInputNumValue.substring(5, 8)}`;
    } else {
      formattedInputValue += '';
    }
    if (currentInputNumValue.length > 8) {
      formattedInputValue += ` ${currentInputNumValue.substring(8, 10)}`;
    }
    if (currentInputNumValue.length > 10) {
      formattedInputValue += ` ${currentInputNumValue.substring(10, 12)}`;
    }
  } else {
    formattedInputValue = `+${currentInputNumValue.substring(0, 16)}`;
  }

  currentInput.value = formattedInputValue.trim();
  return currentInput.value;
}

export default function phoneInputMask() {
  document.querySelectorAll('.input-phone').forEach((itemInput) => {
    itemInput.addEventListener('input', phoneInputFormat);
  });
}
