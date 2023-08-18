
function CrearLibro(isbn,titulo,autor,numpag){
    this.ISBN= isbn;
    this.Titulo= titulo;
    this.Autor= autor;
    this.Numeropagina= numpag;
    this.mostrarLibro = mostrarLibro;

}

function mostrarLibro(){
    console.log(`Libro : ${this.Tituo}`);
}
milibro =new CrearLibro(123,'asd','yo',44)