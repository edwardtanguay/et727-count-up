import './style.css';

document.querySelector('#app').innerHTML = `
<h1>Count up</h1>
<div class="number factories"></div>
<div class="number patents"></div>
`;

const countup = (num, end, step, elem) => {
  elem.innerText = num;
  if (num < end) {
    setTimeout(() => {
      countup(num + 1, end, step, elem);
    }, step);
  }
};

const statusItems = [
  {
    title: "factories",
    start: 0,
    end: 10,
    class: 'factories',
    step: 1
  },
  {
    title: "patents",
    start: 0,
    end: 50,
    class: 'patents',
    step: 3
  }
];

for (const statusItem of statusItems) {
  const elem = document.querySelector('.' + statusItem.class);
  console.log(elem);
  countup(statusItem.start, statusItem.end, statusItem.step, elem);
}


