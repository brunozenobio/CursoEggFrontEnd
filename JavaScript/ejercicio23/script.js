const parrafo = document.getElementById('parrafo');


function convertir(array) {
    const arr_nuevo = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 8){
            arr_nuevo[i] = ` <mark > ${array[i]} </mark>` 


        }else{arr_nuevo[i] = array[i]}
        
        
    }
    parr =arr_nuevo.join(" ")
    return parr
}
array  = parrafo.innerHTML.split(/\s+/)
parrafo.innerHTML = convertir(array)


