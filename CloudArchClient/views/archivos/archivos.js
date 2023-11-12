
async function obtenerArchivos(ubicacion) {

    const urlDirectorios = `http://localhost:4000/api/directoriosEnCarpeta?ubicacion=${ubicacion}`;
    const urlArchivos = `http://localhost:4000/api/archivosCarpeta?ubicacion=${ubicacion}`;

    await fetch(urlDirectorios)
        .then(respuesta => respuesta.json())
        .then(data => procesarData(data))
        .catch(error => console.log('Error: ' , error));

}
form.addEventListener('submit', async(evento) => {
    evento.preventDefault();

    const datos = new FormData(form);

    const url = `http://localhost:4000/api/agregarUsuario?usuario=${datos.get('usuario')}&contrasenia=${datos.get('contrasenia')}&nombre=${datos.get('nombre')}&apellido=${datos.get('apellido')}&rol=${datos.get('radio-group')}`;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(respuesta => respuesta.json())
        .then(data => procesarData(data))
        .catch(error => console.log('Error: ' , error));
});