
const express = require('express');

const router = express.Router();

router.get('/', (res, req) => {
    res.render('login/login');
});

router.get('/archivos', function(req, res) {
    const usuario = req.query.usuario
    res.render('archivos/archivos');
});

router.get('/agregarUsuario', function(req, res) {
    res.render('agregarUsuario/agregarUsuario');
});

router.get('/editarArchivo', function(req, res) {
    res.render('editarArchivo/editarArchivo');
});


module.exports = router;
