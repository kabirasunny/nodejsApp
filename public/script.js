
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