
const Usuario = require('../models/Usuario');
const DirectorioController = require('./DirectorioController');

/** query = usuario, contrasenia, nombre, apellido, rol */
const agregarUsuario = async (req, res) => {
    const insertarUsuario = new Usuario({
        usuario: req.query.usuario,
        contrasenia: req.query.contrasenia,
        nombre: req.query.nombre,
        apellido: req.query.apellido,
        rol: req.query.rol
        // usuario: req.body.usuario,
        // contrasenia: req.body.contrasenia,
        // nombre: req.body.nombre,
        // apellido: req.body.apellido,
        // rol: req.body.rol
    });
    const confirmacion = await insertarUsuario.save();

    DirectorioController.crearDirectorio('Raiz', confirmacion.usuario, confirmacion.usuario);
    DirectorioController.crearDirectorio('Compartido', confirmacion.usuario, confirmacion.usuario);

    res.json(confirmacion);
};

/** query = usuario, contrasenia */
const autenticar = async (req, res) => {
    const autenticacion = await Usuario.findOne({ usuario: req.query.usuario });
    // const autenticacion = await Usuario.findOne({ usuario: req.body.usuario });
    // res.json(autenticacion);

    if (autenticacion == null) {
        console.log('Usuario no identificado');
        res.json ( {
            _id: "Denegado"
        } );
    } else if (autenticacion.contrasenia === req.query.contrasenia) {
    // } else if (autenticacion.contrasenia === req.body.contrasenia) {
            console.log('Autenticado');
            res.json(autenticacion);
        } else {
            console.log('La contraseña actual no coincide. ');
            res.json({
                _id: "Denegado"
            });
    }
    
}

/** query = ruta */
const obtenerUsuario = async (req, res) => {
    const getUsuario = await Usuario.findOne({ usuario: req.query.usuario });
    // const getUsuario = await Usuario.findOne({ usuario: req.body.usuario });
    res.json(getUsuario);
};

/** query =  */
const obtenerListaUsuarios = async (req, res) => {
    const getLista = await Usuario.find();
    res.json(getLista);
};

/** query = usuario, nombre, apellido, rol */
const actualizarUsuario = async (req, res) => {
    const actualizacion = await Usuario.updateOne( { usuario: req.query.usuario }, { $set: { nombre: req.query.nombre, apellido: req.query.apellido, rol: req.query.rol } });
    // const actualizacion = await Usuario.updateOne( { usuario: req.query.usuario }, { $set: { nombre: req.body.nombre, apellido: req.body.apellido, rol: req.body.rol } });
    res.json(actualizacion);
};

/** query = usuario, actual_contrasenia, nueva_contrasenia */
const cambiarPassword = async (req, res) => {
    const getUsuario = await Usuario.findOne({ usuario: req.query.usuario });
    // const getUsuario = await Usuario.findOne({ usuario: req.body.usuario });
    
    if (getUsuario.contrasenia === req.query.actual_contrasenia) {
    // if (getUsuario.contrasenia === req.body.actual_contrasenia) {
        const n_contrasenia = await Usuario.updateOne( { usuario: req.query.usuario }, { $set: { contrasenia: req.query.nueva_contrasenia } } );
        // const n_contrasenia = await Usuario.updateOne( { usuario: req.body.usuario }, { $set: { contrasenia: req.body.nueva_contrasenia } } );
        res.json(n_contrasenia);
    } else {
        console.log('La contraseña actual no coincide');
    }
};

/** query = usuario */
const eliminarUsuario = async (req, res) => {
    const usuarioEliminado = await Usuario.deleteOne( { usuario: req.query.usuario } );
    // const usuarioEliminado = await Usuario.deleteOne( { usuario: req.body.usuario } );
    res.json(usuarioEliminado);
};

module.exports = {
    agregarUsuario,
    autenticar,
    obtenerUsuario,
    obtenerListaUsuarios,
    actualizarUsuario,
    cambiarPassword,
    eliminarUsuario
}