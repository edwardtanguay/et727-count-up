import './style.css';

document.querySelector('#app').innerHTML = `
<h1>Count up</h1>
<div class="number"></div>
`;

const start = 0;
const end = 200;
const stepMilliseconds = 1;
const numberElem = document.querySelector('.number');
numberElem.innerText = start;


const countup = (num) => {
  numberElem.innerText = num;
  if (num < end) {
    setTimeout(() => {
      countup(num + 1);
    }, stepMilliseconds);
  } else {
    console.log('blast off');
  }
};

countup(start);

