
const boton = document.getElementById('boton-ingresar');
const form = document.getElementById('form');

boton.addEventListener('click', async(evento) => {
    evento.preventDefault();

    const datos = new FormData(form);

    const url = `http://localhost:4000/api/autenticar?usuario=${datos.get('usuario')}&contrasenia=${datos.get('password')}`;

    await fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => procesarData(data))
        // .then(data => console.log(data))
        .catch(error => console.log('Error: ' , error));
});

function procesarData(data) {
    const user = data;

    if (user._id !== "Denegado") {
        alert('Bienvenido(a) ' + user.nombre + ' ' + user.apellido);
        window.location.href = '/archivos';
    } else {
        alert('Usuario o Contraseña incorrectos');
        window.location.href = '/';
    }

}