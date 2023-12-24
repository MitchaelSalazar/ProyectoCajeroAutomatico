const formHtml = document.getElementById('formulario')

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

function mostrarErrores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('escondido')
    error.classList.add('error')
    setTimeout(()=>{
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 4000)   
}

function validarDatos(user, pass){

    for(let index = 0; index < data.length; index++){

        if(user === '' && pass === ''){
            mostrarErrores('datos')
        }
        else if(user !== data[index].usuarioDB){
            mostrarErrores('usuario')
            
        }
        else if(pass !== data[index].contraseñaDB){
            mostrarErrores('contraseña')
        }
        else{
            location.href = "file:///C:/Users/User/OneDrive/Escritorio/Curso%20Dev.F/Kata2.JavaScript/Proyecto_CajeroAutomatico/paginaprincipal.html"
        }

    }
    
}


formHtml.addEventListener('submit', (evento) => {

    evento.preventDefault();

    let usuarioEscrito = document.getElementById("usuario").value;

    let contraseñaEscrita = document.getElementById("contraseña").value;

    validarDatos(usuarioEscrito,contraseñaEscrita)
})

const desplazamientoregistro = document.getElementById("accesoregistro")

desplazamientoregistro.addEventListener("click", function pantallaregistro(movimiento){

    movimiento.preventDefault;

    let movimientoacceso = document.getElementsByClassName("recuadro");
    let movimientoregistro = document.getElementsByClassName("registro")
    return movimientoacceso.setAttribute('left','100%'), movimientoregistro.setAttribute('left','0%');
})