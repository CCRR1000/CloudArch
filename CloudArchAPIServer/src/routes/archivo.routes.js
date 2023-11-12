
const express = require('express');
const archivoController = require('../controllers/ArchivoController');

const router = express.Router();

router.post('/crearArchivo', archivoController.nuevoArchivo);
router.get('/obtenerArchivo', archivoController.obtenerArchivo);
router.get('/archivosEnCarpeta', archivoController.archivosCarpeta);
router.put('/editarArchivo', archivoController.editarArchivo);
router.put('/moverArchivo', archivoController.moverArchivo);
router.put('/moverAPapelera', archivoController.moverAPapelera);
router.post('/compartirArchivo', archivoController.compartirArchivo);
router.post('/copiaArchivo', archivoController.copiaArchivo);
router.delete('/eliminarArchivo', archivoController.eliminarArchivo);

module.exports = router;
