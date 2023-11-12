
const express = require('express');
const usuarioController = require('../controllers/UsuarioController');

const router = express.Router();

router.post('/agregarUsuario', usuarioController.agregarUsuario);
router.get('/autenticar', usuarioController.autenticar);
router.get('/obtenerUsuario', usuarioController.obtenerUsuario);
router.get('/listaUsuarios', usuarioController.obtenerListaUsuarios);
router.put('/editarUsuario', usuarioController.actualizarUsuario);
router.put('/cambiarPassword', usuarioController.cambiarPassword);
router.delete('/eliminarUsuario', usuarioController.eliminarUsuario)

module.exports = router;
