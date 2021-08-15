function somaMatriz(array, array2) {
  
    r1 = []

    for (let i = 0; i < array.length; i++) {
            
        r1.push([])

            
    }
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {
            
            r1[i][j] = (array[i][j]  + array2[i][j])  
        
        }
        
    }
        
       return (r1)
}

var array = [
    [1, 1, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 1 ,1]
]

var array2 = [
    [6, 5, 5, 5],
    [5, 7, 5, 5],
    [5, 5, 9, 5],
    [1, 1, 1 ,1]
]

r1 = somaMatriz(array, array2)
console.log(r1)
