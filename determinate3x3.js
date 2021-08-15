
function determinate3x3(det3x3) {

    p1 = det3x3[0][0]
    p2 = det3x3[1][1]
    p3 = det3x3[2][2]
    
    s4 = det3x3[0][1]
    s5 = det3x3[1][2]
    s6 = det3x3[2][0]
    
    t7 = det3x3[0][2]
    t8 = det3x3[1][0]
    t9 = det3x3[2][1]
    
    
     
    r1 = (p1 * p2 * p3) + (s4 * s5 * s6) + (t7 * t8 * t9)
    r2 = (s4 * t8 * p3) + (p1 * s5 *t9) + (t7 * p2 * s6)
    

    console.log("Primeiro passo: Repetir as duas primeiras colunas")
    console.log("[" + p1 + "] [" + p2 + "] [" + p3 + "] [" + p1 + "] [" + p2 + "]")
    console.log("[" + s4 + "] [" + s5 + "] [" + s6 + "] [" + s4 + "] [" + s5 + "]")
    console.log("[" + t7 + "] [" + t8 + "] [" + t9 + "] [" + t7 + "] [" + t8 + "]")

    console.log("Segundo passo: mutiplique em diagonais os determinados elementos com chaves {}")
    console.log("{" + p1 + "} [" + p2 + "] [" + p3 + "] [" + p1 + "] [" + p2 + "]")
    console.log("[" + s4 + "] {" + s5 + "} [" + s6 + "] [" + s4 + "] [" + s5 + "]")
    console.log("[" + t7 + "] [" + t8 + "] {" + t9 + "} [" + t7 + "] [" + t8 + "]")
    diagonal1 = p1 + s5 + t9 

    
    console.log(p1 + " X " + s5 + " X " + t9 + " = " + diagonal1  )
    
    
    return r3 = r1 - r2
}

var det3x3 = [
    [4, -3,5],
    [2,1,3],
    [4,1,0]
]

r3 = determinate3x3(det3x3)
console.log(r3)
