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

function consultar() {

    var cliente = clientes.find(cliente => cliente.cedula == cedula.value);

    if (typeof cliente !== 'undefined') {

        nombres.value = cliente.nombres;
        salario.value = cliente.salario;
        fechaNacimiento.value = cliente.fechaNacimiento;
    }


        // for (const cliente of clientes) {

        //     if (cliente.cedula == cedula.value) {
        //         nombres.value = cliente.nombres;
        //         salario.value = cliente.salario;
        //         fechaNacimiento.value = cliente.fechaNacimiento;
        //         break;
        //     }

        // }


}