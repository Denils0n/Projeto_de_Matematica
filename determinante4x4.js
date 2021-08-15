function determiante(det4x4) {
    


    // valores da primeira linha. 

    var L1C1 = det4x4[0][0] //2
    var L1C2 = det4x4[0][1] //3
    var L1C3 = det4x4[0][2] // -1
    var L1C4 = det4x4[0][3] // 2

    // valores da segunda linha.

    var L2C1 = det4x4[1][0] // 0
    var L2C2 = det4x4[1][1] // 4
    var L2C3 = det4x4[1][2] // -3
    var L2C4 = det4x4[1][3] // 5

    // valores da terceira linha.

    var L3C1 = det4x4[2][0] // 1
    var L3C2 = det4x4[2][1] // 2
    var L3C3 = det4x4[2][2] // 1
    var L3C4 = det4x4[2][3] // 3

    // valores da quarta linha.

    var L4C1 = det4x4[3][0] // 0
    var L4C2 = det4x4[3][1] // 4 
    var L4C3 = det4x4[3][2] // 1
    var L4C4 = det4x4[3][3] // 0

    // código primeiro

    // diagonal primaria, primeiro cofator.

    DP1 = (L2C2*L3C3*L4C4)
    DP2 = (L2C3*L3C4*L4C2)
    DP3 = (L2C4*L3C2*L4C3)

    // diagonal segundaria, primeiro cofator.

    DS1 = (L2C3*L3C2*L4C4)
    DS2 = (L2C2*L3C4*L4C3)
    DS3 = (L2C4*L3C3*L4C2)

    //determinate do premeiro cofator
    determinate1 =  ((DP1) + (DP2)+ (DP3)) - ((DS1) + (DS2) + DS3) 
    console.log(determinate1)
    cofator1 =((L1C1 * 1) * determinate1)
    console.log(cofator1)
    // diagonal primaria, segundo cofator.

    DP1 = (L1C2*L3C3*L4C4)
    DP2 = (L1C3*L3C4*L4C2)
    DP3 = (L1C4*L3C2*L4C3)

    // diagonal segundaria, segundo cofator.

    DS1 = (L1C3*L3C2*L4C4)
    DS2 = (L1C2*L3C4*L4C3)
    DS3 = (L1C4*L3C3*L4C2)

    // determinate do segundo cofator.

    determinate2  =  ((DP1) + (DP2)+ (DP3)) - ((DS1) + (DS2) + DS3)   
    console.log(determinate2)
    cofator2 =((L2C1 * -1) * determinate2)
    console.log(cofator2)
    // diagonal primaria, terceiro cofator.

    DP1 = ((L1C2) * (L2C3) * (L4C4) )
    DP2 = ((L1C3) * (L2C4) * (L4C2) )
    DP3 = ((L1C4) * (L2C2) * (L4C3) )
    
    // diagonal segundaria, terceiro cofator.

    DS1 = ( (L1C3) * (L2C2) * (L4C4))
    DS2 = ( (L1C2) * (L2C4) * (L4C3))
    DS3 = ( (L1C4) * (L2C3) * (L4C2))

    // determiante do teceiro cofator.

    determinate3  =  ((DP1) + (DP2)+ (DP3)) - ((DS1) + (DS2) + DS3)   
    console.log(determinate3)
    cofator3 =((L3C1 * 1) * determinate3)
    console.log(cofator3)
    // diagonal primaria, quarto cofator.

    DP1 = ((L1C2) * (L2C3) * (L3C4))
    DP2 = ((L1C3) * (L2C4) * (L1C4))
    DP3 = ((L1C4) * (L2C2) * (L3C3))

    // diagonal segundaria, quarto cofator.

    DS1 = ((L1C3) * (L2C2) * (L3C4))
    DS2 = ((L1C2) * (L2C4) * (L3C3))
    DS3 = ((L1C4) * (L2C3) * (L3C2))

    // determinate do quarto cofator.

    determinate4  =  ((DP1) + (DP2)+ (DP3)) - ((DS1) + (DS2) + DS3)   
    console.log(determinate4)
    cofator4 =((L4C1 * -1) * determinate4)
    console.log(cofator4)
    determinateFinal = (cofator1 + cofator2 + cofator3 + cofator4)
    return (determinateFinal)
}

var det4x4 = [
    [5,5,5,5],
    [5,5,5,5],
    [5,5,5,5],
    [5,5,5,5] 
]
resultado = determiante(det4x4)
console.log(resultado)
