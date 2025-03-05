# miniCalender
A simple HTML|CSS|JS implementation of a learned new Date and date functions javascript.

## Languages

HTML, CSS, JS

## Getting started

### Installation

perform a

```git
git clone https://github.com/kevinMudenge/doodles.git

```

allow installation, and navigate into the folder.

### run

to run, ... 🙂

alternatively you can just click on the index.html file, it will open in your browser.

## features

Date functions: 
```Javascript
let date = new Date;

monthEl.innerText= date.toLocaleString('en', {month:'long'});
dayEl.innerText = date.toLocaleString('en',{weekday:'long'});
//specifies into string else will just generate numbers,

dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
```