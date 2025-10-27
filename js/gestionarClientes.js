var clientes = [];

function guardarDatos() {

    var cedula = document.getElementById("cedula").value;
    var nombres = document.getElementById("nombres").value;
    var salario = document.getElementById("salario").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var cliente = {
        cedula: cedula,
        nombres: nombres,
        salario: salario,
        fechaNacimiento: fechaNacimiento
    };  

    clientes.push(cliente);

    clientes.forEach(cliente => {
        console.table(cliente);
    });
   
}

function consultar () {

    
}