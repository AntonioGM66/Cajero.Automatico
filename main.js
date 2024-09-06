const cuentas = [
    { nombre: "Monse", saldo: 800, password: "1234" },
    { nombre: "Sara", saldo: 300, password: "5678" },
    { nombre: "Antonio", saldo: 1000, password: "9837" },
    { nombre: "Alin", saldo: 500, password: "abcd"}
];

let cuentaSeleccionada = null;

function iniciarSesion() // Función para iniciar sesión
{
    let seleccion = document.getElementById("cuenta").value;
    let passwordIngresado = document.getElementById("password").value;
    if (passwordIngresado === cuentas[seleccion].password) // Verificar si la contraseña es correcta
    {
        cuentaSeleccionada = seleccion;
        document.getElementById("seleccionarCuenta").style.display = "none";
        document.getElementById("opciones").style.display = "block";
        document.getElementById("resultado").innerHTML = "";
    } else 
    {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
}

function consultarSaldo() // Función para consultar saldo
{
    let saldo = cuentas[cuentaSeleccionada].saldo;
    document.getElementById("resultado").innerHTML = `Saldo actual: ${saldo} USD`;
}

function ingresarMonto() // Función para ingresar monto
{
    let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (isNaN(monto) || monto <= 0) 
    {
        alert("Por favor, ingresa un monto válido.");
        return;
    }
    let nuevoSaldo = cuentas[cuentaSeleccionada].saldo + monto;
    if (nuevoSaldo > 990) 
    {
        alert("No puedes tener más de 990 USD en la cuenta.");
    } else 
    {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("resultado").innerHTML = `Monto ingresado: ${monto} USD. Nuevo saldo: ${nuevoSaldo} USD`;
    }
}

function retirarMonto() // Función para retirar monto
{
    let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (isNaN(monto) || monto <= 0) 
    {
        alert("Por favor, ingresa un monto válido.");
        return;
    }
    let nuevoSaldo = cuentas[cuentaSeleccionada].saldo - monto;
    if (nuevoSaldo < 10) 
    {
        alert("No puedes tener menos de 10 USD en la cuenta.");
    } else 
    {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("resultado").innerHTML = `Monto retirado: ${monto} USD. Nuevo saldo: ${nuevoSaldo} USD`;
    }
}

function cerrarSesion() // Función para cerrar sesión
{
    cuentaSeleccionada = null;
    document.getElementById("seleccionarCuenta").style.display = "block";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("password").value = "";
    document.getElementById("resultado").innerHTML = "";
}
