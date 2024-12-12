const express = require('express');
const path = require('path')
const app = express();
const port = 3000

//Serve static files (HTML,CSS ,JS) form the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

//Example API endpoint
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from Node.js API sup'});
});

//Serve the HTML file for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Start the server

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})