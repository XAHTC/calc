const reset = document.getElementById("ac");
const sign = document.getElementById("sign");
const dot = document.querySelector(".dot");
const equal = document.getElementById("equal");
const result = document.querySelector(".result");
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

let a = '', b = '', op = '';

operationsHandlier();
numbersHandler();

sign.addEventListener('click', () => {
  if (result.value.indexOf("-") == -1) {
    result.value = '-' + result.value;
    op === '' ? a = result.value : b = result.value;
  } else {
    result.value = result.value.slice(1);
    op === '' ? a = result.value : b = result.value;
  }
})

equal.addEventListener('click', () => {
  if (result.value !== '') {
    result.value = solve(a, b, op).toString().slice(0, 13);
    clearResult();
  }
})

dot.addEventListener('click', () => {
  if (result.value.indexOf(".") == -1) {
    op === '' ? a = result.value + '.' : b = result.value + '.';
    op === '' ? result.value = a : result.value = b;
  }
})

reset.addEventListener('click', () => {
  result.value = '';
  clearResult();
})

result.addEventListener('click', () => {
  result.value = result.value.slice(0, result.value.length - 1);
  op === '' ? a = result.value : b = result.value;
})

function operationsHandlier() {
  for (let operation of operations) {
    let element = operation;
    element.addEventListener('click', () => {
      for (operation of operations) {
        operation.classList.remove("active");
      }
      element.classList.add("active")
      op = element.textContent;

      if (result.value !== '') {
        a = result.value;
      }
    })
  }
}

function numbersHandler() {
  for (let number of numbers) {
    let element = number;
    element.addEventListener('click', () => {
      for (operation of operations) {
        operation.classList.remove("active");
      }
      if (result.value.length < 13) {
        if (op === "") {
          a += element.textContent;
          result.value = a;
        } else {
          b += element.textContent;
          result.value = b;
        }
      }
    })
  }
}

function solve(a, b, operator) {
  if (operator == "+") return +a + +b;
  else if (operator == '-') return a - b;
  else if (operator == '÷') return a / b;
  else if (operator == '%') return a % b;
  else return a * b;
}

function clearResult() {
  a = '';
  b = '';
  op = '';
}
