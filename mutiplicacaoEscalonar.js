var vetor= [
    [5,5,5,],
    [5,5,5,],
    [5,5,5,]

]
var resultado = []

for(var i = 0; i < vetor.length; i++){
    resultado.push([]);
}

for (let i = 0; i < vetor.length; i++) {

    for (let j = 0; j < vetor[i].length; j++) {
       
        resultado[i][j] = (vetor[i][j] * 5)  
    }
    
}
console.log(resultado)