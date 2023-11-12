
// use cloudarch;

db.createCollection('usuarios');
db.createCollection('directorios');
db.createCollection('archivos');

db.usuarios.insertMany( [
    { "usuario": "admin001", "contrasenia": "admin001", "nombre": "Andres Alexander", "apellido": "Arango Andrade", "rol": "ADMINISTRADOR" },
    { "usuario": "admin002", "contrasenia": "admin002", "nombre": "Blanca Briceida", "apellido": "Bolaños Bermudez", "rol": "ADMINISTRADOR" },
    { "usuario": "admin003", "contrasenia": "admin003", "nombre": "Carlos Cesar", "apellido": "Castellanos Conde", "rol": "ADMINISTRADOR" },
    { "usuario": "user001", "contrasenia": "user001", "nombre": "Daniela Denisse", "apellido": "Duval Dante", "rol": "EMPLEADO" },
    { "usuario": "user002", "contrasenia": "user002", "nombre": "Emilio Esteban", "apellido": "Enriquez Estrada", "rol": "EMPLEADO" },
    { "usuario": "user003", "contrasenia": "user003", "nombre": "Fanny Fabiola", "apellido": "Franco Figueroa", "rol": "EMPLEADO" },
    { "usuario": "user004", "contrasenia": "user004", "nombre": "German Gabriel", "apellido": "Guzman Godinez", "rol": "EMPLEADO" },
    { "usuario": "user005", "contrasenia": "user005", "nombre": "Hector Hugo", "apellido": "Hidalgo Herrera", "rol": "EMPLEADO" },
    { "usuario": "user006", "contrasenia": "user006", "nombre": "Iris Ivana", "apellido": "Izaguirre Islas", "rol": "EMPLEADO" },
    { "usuario": "user007", "contrasenia": "user007", "nombre": "Jennifer Janeth", "apellido": "Juarez Jaramillo", "rol": "EMPLEADO" }
] );

db.directorios.insertMany( [
    { "nombre": "Papelera", "ubicacion": "cloudarch", "ruta": "cloudarch/Papelera", "propietario": "cloudarch" },
    { "nombre": "Raiz", "ubicacion": "admin001", "ruta": "admin001/Raiz", "propietario": "admin001" },
    { "nombre": "Compartido", "ubicacion": "admin001", "ruta": "admin001/Compartido", "propietario": "admin001" },
    { "nombre": "Raiz", "ubicacion": "admin002", "ruta": "admin002/Raiz", "propietario": "admin002" },
    { "nombre": "Compartido", "ubicacion": "admin002", "ruta": "admin002/Compartido", "propietario": "admin002" },
    { "nombre": "Raiz", "ubicacion": "admin003", "ruta": "admin003/Raiz", "propietario": "admin003" },
    { "nombre": "Compartido", "ubicacion": "admin003", "ruta": "admin003/Compartido", "propietario": "admin003" },
    { "nombre": "Raiz", "ubicacion": "user001", "ruta": "user001/Raiz", "propietario": "user001" },
    { "nombre": "Compartido", "ubicacion": "user001", "ruta": "user001/Compartido", "propietario": "user001" },
    { "nombre": "Raiz", "ubicacion": "user002", "ruta": "user002/Raiz", "propietario": "user002" },
    { "nombre": "Compartido", "ubicacion": "user002", "ruta": "user002/Compartido", "propietario": "user002" },
    { "nombre": "Raiz", "ubicacion": "user003", "ruta": "user003/Raiz", "propietario": "user003" },
    { "nombre": "Compartido", "ubicacion": "user003", "ruta": "user003/Compartido", "propietario": "user003" },
    { "nombre": "Raiz", "ubicacion": "user004", "ruta": "user004/Raiz", "propietario": "user004" },
    { "nombre": "Compartido", "ubicacion": "user004", "ruta": "user004/Compartido", "propietario": "user004" },
    { "nombre": "Raiz", "ubicacion": "user005", "ruta": "user005/Raiz", "propietario": "user005" },
    { "nombre": "Compartido", "ubicacion": "user005", "ruta": "user005/Compartido", "propietario": "user005" },
    { "nombre": "Raiz", "ubicacion": "user006", "ruta": "user006/Raiz", "propietario": "user006" },
    { "nombre": "Compartido", "ubicacion": "user006", "ruta": "user006/Compartido", "propietario": "user006" },
    { "nombre": "Raiz", "ubicacion": "user007", "ruta": "user007/Raiz", "propietario": "user007" },
    { "nombre": "Compartido", "ubicacion": "user007", "ruta": "user007/Compartido", "propietario": "user007" }
] );

db.archivos.insertMany( [
    { "nombre": "archivo1", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "admin001/Raiz/archivo1.txt", "propietario": "admin001", "ubicacion": "admin001/Raiz", "fecha": "2023/11/03" },
    { "nombre": "archivo2", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "admin001/Raiz/archivo2.html", "propietario": "admin001", "ubicacion": "admin001/Raiz", "fecha": "2023/10/04" },
    { "nombre": "archivo3", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "admin002/Raiz/archivo3.txt", "propietario": "admin002", "ubicacion": "admin002/Raiz", "fecha": "2023/09/05" },
    { "nombre": "archivo4", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "admin002/Raiz/archivo4.html", "propietario": "admin002", "ubicacion": "admin002/Raiz", "fecha": "2023/08/06" },
    { "nombre": "archivo5", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "admin003/Raiz/archivo5.txt", "propietario": "admin003", "ubicacion": "admin003/Raiz", "fecha": "2023/07/07" },
    { "nombre": "archivo6", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "admin003/Raiz/archivo6.html", "propietario": "admin003", "ubicacion": "admin003/Raiz", "fecha": "2023/06/08" },
    { "nombre": "archivo7", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user001/Raiz/archivo7.txt", "propietario": "user001", "ubicacion": "user001/Raiz", "fecha": "2023/05/09" },
    { "nombre": "archivo8", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user001/Raiz/archivo8.html", "propietario": "user001", "ubicacion": "user001/Raiz", "fecha": "2023/04/10" },
    { "nombre": "archivo9", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user002/Raiz/archivo9.txt", "propietario": "user002", "ubicacion": "user002/Raiz", "fecha": "2023/03/11" },
    { "nombre": "archivo10", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user002/Raiz/archivo10.html", "propietario": "user002", "ubicacion": "user002/Raiz", "fecha": "2023/02/12" },
    { "nombre": "archivo11", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user003/Raiz/archivo11.txt", "propietario": "user003", "ubicacion": "user003/Raiz", "fecha": "2023/01/13" },
    { "nombre": "archivo12", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user003/Raiz/archivo12.html", "propietario": "user003", "ubicacion": "user003/Raiz", "fecha": "2023/10/14" },
    { "nombre": "archivo13", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user004/Raiz/archivo13.txt", "propietario": "user004", "ubicacion": "user004/Raiz", "fecha": "2023/09/15" },
    { "nombre": "archivo14", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user004/Raiz/archivo14.html", "propietario": "user004", "ubicacion": "user004/Raiz", "fecha": "2023/08/16" },
    { "nombre": "archivo15", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user005/Raiz/archivo15.txt", "propietario": "user005", "ubicacion": "user005/Raiz", "fecha": "2023/07/17" },
    { "nombre": "archivo16", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user005/Raiz/archivo16.html", "propietario": "user005", "ubicacion": "user005/Raiz", "fecha": "2023/06/18" },
    { "nombre": "archivo17", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user006/Raiz/archivo17.txt", "propietario": "user006", "ubicacion": "user006/Raiz", "fecha": "2023/05/19" },
    { "nombre": "archivo18", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user006/Raiz/archivo18.html", "propietario": "user006", "ubicacion": "user006/Raiz", "fecha": "2023/04/20" },
    { "nombre": "archivo19", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user007/Raiz/archivo19.txt", "propietario": "user007", "ubicacion": "user007/Raiz", "fecha": "2023/03/21" },
    { "nombre": "archivo20", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user007/Raiz/archivo20.html", "propietario": "user007", "ubicacion": "user007/Raiz", "fecha": "2023/02/22" },
    { "nombre": "archivo21", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "admin001/Raiz/archivo21.txt", "propietario": "admin001", "ubicacion": "admin001/Raiz", "fecha": "2023/01/23" },
    { "nombre": "archivo22", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "admin002/Raiz/archivo22.html", "propietario": "admin002", "ubicacion": "admin002/Raiz", "fecha": "2023/10/24" },
    { "nombre": "archivo23", "extension": "txt", "contenido": "Este es el contenido de un archivo almacenado en CloudArch", "ruta": "user001/Raiz/archivo23.txt", "propietario": "user001", "ubicacion": "user001/Raiz", "fecha": "2023/09/25" },
    { "nombre": "archivo24", "extension": "html", "contenido": "<p>Este es el contenido de un archivo almacenado en CloudArch</p>", "ruta": "user002/Raiz/archivo24.html", "propietario": "user002", "ubicacion": "user002/Raiz", "fecha": "2023/08/26" }
] );