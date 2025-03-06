const containerEl = document.querySelector('.container');

let careers=["Software Engineer", "Thinking Man", "Entreprenuer", "Enthusiast"];

let careerIndex = 0;
let characterIndex = 0;

updateContext();

function updateContext(){
    containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1)==="E" ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}.</h1>`;
    characterIndex++

    if (characterIndex>careers[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }

    if(careerIndex===careers.length){
        careerIndex = 0;
    }
    setTimeout(updateContext, 400);
    
}

const btnEl = document.querySelector('.btn')

btnEl.addEventListener("mouseover", (event)=>{
    let xPos = event.pageX- btnEl.offsetLeft;
    let yPos = event.pageY-btnEl.offsetTop;
    
    //use setProperty name to define offset values.
    btnEl.style.setProperty("--x", xPos + "px");
    
    btnEl.style.setProperty("--y",yPos + "px");
})
//setProperty is a defined js function, references as so.
// Always assume "" are needed saves you a lot of pain.