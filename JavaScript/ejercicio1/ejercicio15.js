function CrearCiruclo(radio){
    this.radio = radio
    this.Area = Area
    this.Perimetro = Perimetro
}
function Area(){
    console.log(`Area: ${Math.PI * this.radio **2}`)
}
function Perimetro(){
    console.log(`Perimetro: ${Math.PI * 2 * this.radio}`)
}
radio = prompt("Ingrese el radio")
circulo = new CrearCiruclo(radio)
circulo.Area()
circulo.Perimetro()