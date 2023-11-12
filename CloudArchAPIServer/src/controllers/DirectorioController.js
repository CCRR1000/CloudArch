
const Directorio = require('../models/Directorio');
const Archivo = require('../models/Archivo');

/** query = nombre, ubicacion, propietario */
const nuevoDirectorio = async (req, res) => {
    const insercion = await crearDirectorio(req.query.nombre, req.query.ubicacion, req.query.propietario);
    res.json(insercion);
};

/** query = ruta */
const obtenerDirectorio = async (req, res) => {
    const getDirectorio = await Directorio.findOne( { ruta: req.query.ruta } );
    res.json(getDirectorio);
};

/** query = ubicacion */
const directoriosCarpeta = async (req, res) => {
    const lista = await Directorio.find( { ubicacion: req.query.ubicacion } );
    res.json(lista);
};

/** query = ruta directorio, nueva ubicacion */
const moverDirectorio = async (req, res) => {
    const reubicacion = await moverDir(req.query.ruta,req.query.nueva_ubicacion);
    res.json(reubicacion);
};

/** query = ruta directorio */
const moverAPapelera = async (req, res) => {
    const reubicacion = await moverDir(req.query.ruta, 'cloudarch/Papelera');
    res.json(reubicacion);
};

/** query = ruta directorio */
const eliminarDirectorio = async (req, res) => {
    // const rutaDir = req.body.ruta;
    const archivosDirectorio = await Archivo.deleteMany( {ubicacion: req.query.ruta}); 
    const directorioEliminado = await Directorio.deleteOne( {ruta: req.query.ruta}); 
    res.json(directorioEliminado);
};

function crearDirectorio(_nombre, _ubicacion, _propietario) {
    const _ruta = `${_ubicacion}/${_nombre}`;

    const nuevo_directorio = new Directorio ( {
        nombre: _nombre,
        ubicacion: _ubicacion,
        ruta: _ruta,
        propietario: _propietario,
        fecha: new Date(Date.now())
    });
    return nuevo_directorio.save();
}

function moverDir (rutaDirectorio, nuevaUbicacion) {
    const directorio = Directorio.findOne( { ruta: rutaDirectorio } );
    const nueva_ubicacion = nuevaUbicacion;
    const nueva_ruta = `${nueva_ubicacion}/${directorio.nombre}`;
    const archivos = Archivo.find( { ubicacion: { $regex: `^${directorio.ruta}` } } );

    archivos.forEach(arch => {
        const ubicacion_archivo = arch.ubicacion.replace(directorio.ruta,nueva_ruta);
        const ruta_archivo = arch.ruta.replace(directorio.ruta,nueva_ruta);
        const archivoReubicado = Archivo.updateOne({ruta: arch.ruta}, {$set: {ubicacion: ubicacion_archivo, ruta: ruta_archivo}});
    });

    return Directorio.updateOne( {ruta: directorio.ruta}, {$set: {ubicacion: nueva_ubicacion, ruta: nueva_ruta}});
    
}

module.exports = {
    nuevoDirectorio,
    obtenerDirectorio,
    directoriosCarpeta,
    moverDirectorio,
    moverAPapelera,
    // compartirDirectorio,
    eliminarDirectorio,
    crearDirectorio
}