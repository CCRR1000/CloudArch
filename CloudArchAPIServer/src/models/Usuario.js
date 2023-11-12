
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = model('Usuario', usuarioSchema);
