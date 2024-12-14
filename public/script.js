

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

document.getElementById('changeBtn'), addEventListener("click", () => {
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