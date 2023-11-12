
const express = require('express');
const directorioController = require('../controllers/DirectorioController');

const router = express.Router();

router.post('/crearDirectorio', directorioController.nuevoDirectorio);
router.get('/obtenerDirectorio', directorioController.obtenerDirectorio);
router.get('/directoriosEnCarpeta', directorioController.directoriosCarpeta);
router.put('/moverDirectorio', directorioController.moverDirectorio);
router.put('/moverAPapelera', directorioController.moverAPapelera);
router.post('/compartirDirectorio', directorioController.moverAPapelera);
router.delete('/eliminarDirectorio', directorioController.eliminarDirectorio);

module.exports = router;
