const containerEl = document.querySelector('.container');

let careers=["Software Engineer", "Thinking Man", "Entreprenuer", "Enthusiast"];

let careerIndex = 0;
let characterIndex = 0;

updateContext();

function updateContext(){
    characterIndex++
    containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1)==="E" ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}.</h1>`;
    
    if (characterIndex=== careers[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }

    if(careerIndex===careers.length){
        careerIndex = 0;
    }
    setTimeout(updateContext, 400);
    
}