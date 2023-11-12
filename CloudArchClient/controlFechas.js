
const fecha = new Date(Date.now());
console.log('Fecha: ' + getFecha(fecha));
console.log('Hora: ' + getHora(fecha));

function getFecha(fecha) {
    return fecha.toLocaleDateString();
    // return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
}

function getHora(horaFecha) {
    return `${fecha.getHours()}:${fecha.getMinutes()}`;
}

