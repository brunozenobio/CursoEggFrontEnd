var h1 = document.getElementsByTagName('h1')[0]
var body = document.getElementsByTagName('body')[0]
h1.id = "h1id"
h1.onclick = () => {
    var div = document.createElement("div")
    div.id = "iddiv"

    body.appendChild(div)
    div.innerHTML = 'Soy un div <br><strong>Soy un texto en negrita</strong>'
    
}
