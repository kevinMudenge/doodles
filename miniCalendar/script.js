let monthEl = document.getElementById('month-name');
let dayEl = document.getElementById('day-name');
let dateEl = document.getElementById('date');
let yearEl = document.getElementById('year')

let date = new Date;

monthEl.innerText= date.toLocaleString('en', {month:'long'});
dayEl.innerText = date.toLocaleString('en',{weekday:'long'});
//specifies into string else will just generate numbers,

dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();