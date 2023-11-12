
const Archivo = require('../models/Archivo');
const Usuario = require('../models/Usuario');

// const nuevoArchivo = async (req, res) => {
//     const _ruta = `${req.query.ubicacion}/${req.query.nombre}.${req.query.extension}`;

//     const nuevo_archivo = new Archivo ( {
//         nombre: req.query.nombre,
//         extension: req.query.extension,
//         contenido: req.query.contenido,
//         propietario: req.query.propietario,
//         ubicacion: req.query.ubicacion,
//         ruta: _ruta,
//         fecha: new Date(Date.now())
//         // nombre: req.body.nombre,
//         // extension: req.body.extension,
//         // contenido: req.body.contenido,
//         // propietario: req.body.propietario,
//         // ubicacion: req.body.ubicacion,
//         // ruta: req.body.ruta,
//         // fecha: new Date(req.body.Date)
//     });
    
//     const insercion = await nuevo_archivo.save().catch((error)=>{console.error(error);});
//     res.json(insercion);
// };

/** query = nombre, extension, contenido, propietario, ubicacion */
const nuevoArchivo = async (req, res) => {
    const insercion = await crearArchivo(req.query.nombre, req.query.extension, req.query.contenido, req.query.propietario, req.query.ubicacion);
    res.json(insercion);
};

/** query = ruta archivo */
const obtenerArchivo = async (req, res) => {
    const getArchivo = await Archivo.findOne( { ruta: req.query.ruta } );
    // const getArchivo = await Archivo.findOne( { ruta: req.body.ruta } );
    res.json(getArchivo);
};

/** query = ubicacion */
const archivosCarpeta = async (req, res) => {
    const lista = await Archivo.find( { ubicacion: req.query.ubicacion } );
    res.json(lista);
};

/** query = ruta archivo, nombre, contenido */
const editarArchivo = async (req, res) => {
    const cambios = await Archivo.updateOne( {ruta: req.query.ruta}, {$set: {nombre: req.query.nombre, contenido: req.query.contenido } } );
    // const cambios = await Archivo.updateOne( {ruta: req.body.ruta}, {$set: {nombre: req.body.nombre, contenido: req.body.contenido } } );
    res.json(cambios);
};

/** query = ruta archivo, nueva_ubicacion*/
const moverArchivo = async (req, res) => {
    // const ruta_actual = req.body.ruta_actual;
    const archivo = await Archivo.findOne( { ruta: req.query.ruta } );
    const nueva_ruta = `${req.query.nueva_ubicacion}/${archivo.nombre}.${archivo.extension}`;
    const reubicacion = await Archivo.updateOne( {ruta: archivo.ruta}, {$set: {ubicacion: req.query.nueva_ubicacion, ruta: nueva_ruta}});
    res.json(reubicacion);
};

/** query = ruta archivo */
const moverAPapelera = async (req, res) => {
    const archivo = await Archivo.findOne( { ruta: req.query.ruta } );
    const reubicacion = await Archivo.updateOne( {ruta: archivo.ruta}, {$set: {ubicacion: 'cloudarch/Papelera', ruta: `cloudarch/Papelera/${archivo.nombre}.${archivo.extension}`}});
    res.json(reubicacion);
};

/** query = ruta archivo, usuario a compartir */
const compartirArchivo = async (req, res) => {
    const archivo = await Archivo.findOne( { ruta: req.query.ruta } );
    const nuevoPropietario = await Usuario.findOne({ usuario: req.query.nuevo_propietario });
    const ubicacionNuevoPropietario = `${nuevoPropietario.usuario}/Compartido`;
    const insercion = await crearArchivo(archivo.nombre, archivo.extension, archivo.contenido, archivo.propietario, ubicacionNuevoPropietario);
    res.json(insercion);
};

/** query = ruta archivo */
const copiaArchivo = async (req, res) => {
    const archivo = await Archivo.findOne( { ruta: req.query.ruta } );
    const nuevoNombre = `${archivo.nombre}-copia`
    const insercion = await crearArchivo(nuevoNombre, archivo.extension, archivo.contenido, archivo.propietario, archivo.ubicacion);
    res.json(insercion);
};

/** query = ruta archivo */
const eliminarArchivo = async (req, res) => {
    const archivoEliminado = await Archivo.deleteOne( {ruta: req.query.ruta}); 
    // const archivoEliminado = await Archivo.deleteOne( {ruta: req.body.ruta}); 
    res.json(archivoEliminado);
};

function crearArchivo(_nombre, _extension, _contenido, _propietario, _ubicacion) {
    const _ruta = `${_ubicacion}/${_nombre}.${_extension}`;

    const nuevo_archivo = new Archivo ( {
        nombre: _nombre,
        extension: _extension,
        contenido: _contenido,
        propietario: _propietario,
        ubicacion: _ubicacion,
        ruta: _ruta,
        fecha: new Date(Date.now())
    });
    
    return nuevo_archivo.save();
}

module.exports = {
    nuevoArchivo,
    obtenerArchivo,
    archivosCarpeta,
    editarArchivo,
    moverArchivo,
    moverAPapelera,
    compartirArchivo,
    copiaArchivo,
    eliminarArchivo
}