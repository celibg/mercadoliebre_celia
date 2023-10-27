const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/register');
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login');
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
