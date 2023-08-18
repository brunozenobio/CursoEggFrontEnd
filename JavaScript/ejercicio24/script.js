const formulario = document.getElementsByClassName("form")[0]
const radio = document.getElementById("radio")
const boton = document.getElementById("submit-button")
const opciones = document.getElementById("funcionCalc")
const output = document.getElementById("output")


function llamarBoton() {
    let current = opciones.options[opciones.selectedIndex]
    let radioCirculo = parseFloat(radio.value)
    if (current.id  == 'perimetro') {
        output.textContent = `El perimetro es : ${Perimetro(radioCirculo)}`
    }else{
        output.textContent = `El area es: ${Area(radioCirculo)}`
    }
}




boton.onclick = llamarBoton



function Perimetro(radio) {
    return Math.PI * radio * 2
}

function Area(radio) {
    return Math.PI * radio ** 2
    
}