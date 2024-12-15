

document.getElementById('greenBtn').addEventListener("click", function () {
    fetch('/api/greet') //Fetch the greeting from the API
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('greeting').innerText = data.message;
        })
        .catch(error => {
            console.error('Error fetching greeting:', error)
        })
})

let body = document.querySelector('body');

document.getElementById('changeBtn').addEventListener("click", () => {
    fetch('/api/color')
        .then(response => response.json())
        .then(data => {
            console.log(data.color)
            body.style.background = data.color;
        })
        .catch(error => {
            console.error('Error fetching color:', error)
        })
})

// ============================================================================================
const textContainer = document.querySelector('.textContainer');

const careers = ["Java Developer", "React Developer", "Web Developer"];
let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    textContainer.innerHTML = `<h1>I'm a ${careers[careerIndex].slice(0, characterIndex)}</h1>`

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400)
}

// ==========================================================================================================