
const express = require('express');
const session = require('express-session')
const AppRoutes = require('./app.routes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('login/login');
});

app.use('/', AppRoutes);

// Iniciar el servidor
const port = 4100;
const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});

