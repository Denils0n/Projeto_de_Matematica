var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    
]
function transposeArray(array, arrayLength){
    var newArray = [];
    

    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    }

    for(var i = 0; i < array.length; i++){
        
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j])

            
        }
    }
    return newArray;
    
}
r1 = transposeArray(array, array.length)
console.log(r1)
