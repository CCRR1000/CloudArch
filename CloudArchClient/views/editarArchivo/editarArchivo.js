
const form = document.getElementById('form');

form.addEventListener('submit', async(evento) => {
    evento.preventDefault();

    const datos = new FormData(form);
    
    const url = `http://localhost:4000/api/crearArchivo?nombre=${datos.get('nombre')}&extension=${datos.get('radio-group')}&contenido=${datos.get('contenido')}&propietario=${datos.get('usuario')}&ubicacion=${datos.get('ubicacion')}`;

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

function procesarData(data) {
    const user = data;

    if (user._id !== "Denegado") {
        alert('Archivo agregado');
        window.location.href = '/editarArchivo';
        // window.location.href = '/archivos';
    } else {
        alert('Ocurrió un error, no se pudo agregar el usuario');
        window.location.href = '/editarArchivo';
    }

}