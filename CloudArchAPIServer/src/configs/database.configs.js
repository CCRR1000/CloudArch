// indicar que se trabajará con mongoose
const mongoose = require('mongoose');

const host = 'localhost';
const port = 27017;
const database = 'cloudarch';
// no es necesario crear la base de datos antes, mongoose la crea

// ` = Alt + 96

async function start() {
    try {
        const db = await mongoose.connect(`mongodb://${host}:${port}/${database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log(`Conexión realizada con éxito a base de datos: ${database}`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    start
}

