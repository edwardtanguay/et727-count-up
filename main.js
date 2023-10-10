import './style.css';

document.querySelector('#app').innerHTML = `
<h1>Count up</h1>
<div class="number number1"></div>
<div class="number number2"></div>
`;


const start = 0;
const end = 200;
const stepMilliseconds = 1;
const number1Elem = document.querySelector('.number1');
const number2Elem = document.querySelector('.number2');

const countup = (num, elem) => {
  elem.innerText = num;
  if (num < end) {
    setTimeout(() => {
      countup(num + 1, elem);
    }, stepMilliseconds);
  } else {
    console.log('blast off');
  }
};

countup(start, number1Elem);
countup(start, number2Elem);

