
const express = require('express');
const {start} = require('./configs/database.configs');
const UsuarioRoutes = require('./routes/usuario.routes');
const ArchivoRoutes = require('./routes/archivo.routes');
const DirectorioRoutes = require('./routes/directorio.routes');

const ejs = require('ejs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// inicializa la conexión con la base de datos
start();
const port = 4000; 

// Inicio de la aplicación
app.get('/', (req, res) => {
    res.render('inicio');
});

app.use('/api', UsuarioRoutes);
app.use('/api', ArchivoRoutes);
app.use('/api', DirectorioRoutes);

// Iniciar el servidor
const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});


