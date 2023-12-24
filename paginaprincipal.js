console.log("Hola")
function accesoretiro(){
    let pantallaretiro = document.getElementById("pantallaprincipal")
    return pantallaretiro.scrollLeft = 100
    
}

const desplazamientoretiro = document.getElementsByClassName("retiro")


let data = [
    {
        usuarioDB:'Mitchael Salazar',
        contraseñaDB:'2511'
    },
    {
        usuarioDB:'Margarita Kuyoc',
        contraseñaDB:'1597'
    },
    {
        usuarioDB:'Amairany Castillo',
        contraseñaDB:'6782'
    }
]

//Funcionalidad de la pantalla de retiro de dinero
let entradaretiro = "";

function agregarvalorentradaretiro(valor){
    valorretiro += valor; //displayValue = displayValue + value, Asignar el valor presionado existente
    document.getElementById("pantallaretiro").value=valorretiro;
}

function limpiarpantallaretiro(){
    valorretiro = ''; //Vale vacío, cadena vacía
    document.getElementById("pantallaretiro").value=valorretiro;
}

let saldo = ""

for(i=0;i>data.length;i++){
    if(data[i].usuarioDB=="Mitchael Salazar")
        saldo = 505;
    else if(data[i].usuarioDB=="Margarita Kuyoc")
        saldo = 750;
    else if(data[i].usuarioDB=="Amairany Castillo")
        saldo = 312;
    else{
        saldo=0;
    }
}

