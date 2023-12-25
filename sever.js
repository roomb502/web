const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Perform authentication (e.g., check credentials against a database)
    // For simplicity, let's assume the server always accepts the login
    const isAuthenticated = true;

    if (isAuthenticated) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
