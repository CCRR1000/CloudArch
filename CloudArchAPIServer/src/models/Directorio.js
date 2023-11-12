
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const directorioSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    ruta: {
        type: String,
        unique: true,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    fecha: Date
}, {
    versionKey: false
});

module.exports = model('Directorio', directorioSchema);
