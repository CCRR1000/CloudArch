
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const archivoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    contenido: String,
    ruta: {
        type: String,
        unique: true,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    fecha: Date
}, {
    versionKey: false
});

module.exports = model('Archivo', archivoSchema);