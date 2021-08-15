
function determinate2x2(det2x2) {

    const DP1 = det2x2[0][0]
    const DP2 = det2x2[1][0]

    const DS1 = det2x2[1][0]
    const DS2 = det2x2[1][0]

    r3 = (DP1 * DP2) - (DS1 * DS2)

    return (r3)

}

var det2x2 = [
    [1*5, 1.20],
    [1.50, 1.20]
]
console.log(det2x2)
r3 = determinate2x2(det2x2)
console.log(r3)
