var variable = "Guia de JavaScript".split(' ')
var max = variable[0]
for (let i = 1; variable.length;i++){
    if (variable[i] > max){
        max = variable[i]
    }
}
