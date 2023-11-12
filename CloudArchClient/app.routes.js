
const express = require('express');

const router = express.Router();

router.get('/', (res, req) => {
    res.render('login/login');
});

router.get('/archivos', function(req, res) {
    res.render('archivos/archivos');
});

router.get('/agregarUsuario', function(req, res) {
    res.render('agregarUsuario/agregarUsuario');
});


module.exports = router;
