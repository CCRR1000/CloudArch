
const form = document.getElementById('form');

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

function procesarData(data) {
    const user = data;

    if (user._id !== "Denegado") {
        alert('Usuario agregado');
        window.location.href = '/archivos';
    } else {
        alert('Ocurrió un erro, no se pudo agregar el usuario');
        window.location.href = '/agregarUsuario';
    }

}