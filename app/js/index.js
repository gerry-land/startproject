window.addEventListener('load', (e) => {
  const field = document.getElementsByClassName('js-field')[0];
  const operators = Array.from(document.getElementsByClassName('js-operator')); // [...document.getElementsByClassName('js-operator')]
  const caclulate = document.getElementsByClassName('js-calculate')[0];
  const result = document.getElementsByClassName('js-result')[0];

  let lastClickedOperator = '';
  let currentValue = 0;

  operators.forEach(operator => {
    operator.addEventListener('click', () => {
      let valueFromField = getValueFromField(field);

      lastClickedOperator = operator.innerText;

      if (isNaN(valueFromField)) {
        return showError(result, 'This is not a number');
      }

      if (valueFromField === 0) {
        return showError(result, 'Field is empty');
      }

      currentValue = proccedOperation(currentValue, valueFromField, lastClickedOperator);
      
      field.value = '';
    });
  });

  caclulate.addEventListener('click', () => {
    let valueFromField = getValueFromField(field);

    if (isNaN(valueFromField)) {
      return showError(result, 'This is not a number');
    }

    if (valueFromField === 0) {
      return showError(result, 'Field is empty');
    }

    currentValue = proccedOperation(currentValue, valueFromField, lastClickedOperator);
    field.value = '';
    showResult(result, currentValue);
  });
});

function getValueFromField(field) {
  let value = field.value;
  value = Number(value);

  return value
}

function proccedOperation(currentValue, valueFromField, operator) {
  switch(operator) {
    case '+': return currentValue + valueFromField;
    break;

    case '-': return currentValue - valueFromField;
    break;

    case '*': return currentValue * valueFromField;
    break;

    case '/': return currentValue / valueFromField;
    break;

    default: return 0;
  }
}

function showError(resultField, error) {
  resultField.classList.add('-error');
  resultField.innerHTML = error;
}

function showResult(resultField, result) {
  resultField.classList.remove('-error');
  resultField.innerHTML = result;
}