const inputEl = document.querySelector('input');
const bodyEl = document.querySelector('body');

inputEl.checked= JSON.parse(localStorage.getItem('mode'));

toggleMode();

inputEl.addEventListener('click',()=>{
    toggleMode();
})



function toggleMode () {
    if (inputEl.checked){
        bodyEl.style.background = "black";
    } else
    {
        bodyEl.style.backgroundColor= "antiquewhite";
    }
    storage();
}

function storage(){
    localStorage.setItem('mode',JSON.stringify(inputEl.checked));
}

function randomImages(){
    imageEl
}