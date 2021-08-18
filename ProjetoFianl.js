


// este exemplo requer a instalação da biblioteca prompt-sync
// comando para instalação: npm install prompt-sync
// mais detalhes em https://www.npmjs.com/package/prompt-sync


const prompt = require('prompt-sync')();

// para adicionar mais opções ao menu altere esta função
function imprimirMenu() {
	console.log('~~ Caluladora de Matriz ~~')
	console.log('Opções:')
	console.log('(1) Determinate de ordem 2.')
	console.log('(2) Determinante de ordem 3.')
	console.log('(3) Determinante de ordem 4.')
	console.log('(4) Mutiplicação escalar.')
	console.log('(5) Soma de duas matrizes.')
	console.log('(6) Subtração de duas matrizes.')
	console.log('(7) Transposta de uma matrizes.')
	console.log('(8) Sobre')
	console.log('(9) Sair')

}


// note como esta operação está isolada em uma função
// as novas que vocês vão implementar na prova devem seguir o mesmo modelo

function determinate2x2() {
contador = 1
console.log("use apenas números, não use letras, simbolos ou qualquer outra coisas que não seja NÚMEROS.")
const det2x2=[[],[]]

for (let  i = 0;  i < 2; i++) {
    
    for (let j = 0; j < 2 ; j++) {
        console.log('Digite o numero da ' + contador + "º linha")
        det2x2[i][j] = Number(prompt('Digite os numeros da primeira linha: '))
            
    }
    contador++
}
   
console.log(det2x2)
// pegamos o produto da diagonal primaria e subtraimos pela diagonal segundaria

// valores da matriz em variaveis
const DP1 = det2x2[0][0]
const DP2 = det2x2[0][1]

const DS1 = det2x2[1][0]
const DS2 = det2x2[1][1]

r3 = (DP1 * DS2) - (DS1 * DP2) //subitração da diagonal primaria e pela segundaraia

console.log("O determinante da matriz é:", r3)

}
//------------------------------------------------------------------------------//

function determinate3x3() {
contador = 1
console.log("use apenas números, não use letras, simbolos ou qualquer outra coisas que não seja NÚMEROS.")


/*Essa regra diz que para encontrar o valor numérico de um determinante de ordem 3, 
primeiro devemos repetir as duas primeiras colunas
à direita do determinante e mutiplicar os elementos do determinante da seguinte FONTE: https://mundoeducacao.uol.com.br/matematica/regra-sarrus.htm#:~:text=Essa%20regra%20diz%20que%20para,do%20determinante%20da%20seguinte%20forma%3A&text=Todos%20os%20determinantes%20de%20ordem%203%20serão%20resolvidos%20seguindo%20esse%20mesmo%20processo.*/
    
// nessa parte nossos colocamos todos os valores da matriz dentro de variavel.
const det3x3 =[[],[],[]]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log('Digite o numero da ' + contador + "º linha")
        det3x3[i][j] = Number(prompt('Digite os numeros da primeira linha: '))   
    }
    contador++ 
}
console.log(det3x3)
p1 = det3x3[0][0]
p2 = det3x3[1][1]
p3 = det3x3[2][2]
        
s4 = det3x3[0][1]
s5 = det3x3[1][2]
s6 = det3x3[2][0]
        
t7 = det3x3[0][2]
t8 = det3x3[1][0]
t9 = det3x3[2][1]
        
// aqui pegamos as os elementos da matriz e já calculamos a diagonal principal e segundaria
         
r1 = (p1 * p2 * p3) + (s4 * s5 * s6) + (t7 * t8 * t9) // diagonal primaria
r2 = (s4 * t8 * p3) + (p1 * s5 *t9) + (t7 * p2 * s6) // diagonal segundaria
        
r3 = r1 - r2
console.log("O determinate da matriz é:", r3)
}
//-----------------------------------------------------------//

function determiante4x4() {
contador = 1
console.log("use apenas números, não use letras, simbolos ou qualquer outra coisas que não seja NÚMEROS.")

const det4x4 = [[],[],[],[]]
    
/* O Teorema de Laplace é um método para calcular o determinante de matrizes quadradas de ordem n. 
Normalmente, é utilizado quando as matrizes são de ordem igual ou superior a 4. FONTE: https://www.todamateria.com.br/teorema-de-laplace/#:~:text=O%20Teorema%20de%20Laplace%20é,Laplace%20(1749-1827).*/
    
// valores da primeira linha. 
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log('Digite o numero da ' + contador + "º linha")
        det4x4[i][j] = Number(prompt('Digite'))
    }
    contador++ 
}    
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
    
cofator1 =((L1C1 * 1) * determinate1)
    
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
    
cofator2 =((L2C1 * -1) * determinate2)
    
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
    
cofator3 =((L3C1 * 1) * determinate3)
    
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
    
cofator4 =((L4C1 * -1) * determinate4)
    
determinateFinal = (cofator1 + cofator2 + cofator3 + cofator4)
console.log(det4x4)
console.log("O determinate da matriz é:", determinateFinal)
}
//--------------------------------------------------------------------------//
function mutiplicacaoEscalonar() {
/*O sistema de escalonamento de matrizes completas dos coeficientes numéricos de um sistema de 
equações lineares possui a finalidade de simplificar o sistema através de operações entre os elementos 
pertencentes às linhas da matriz. FONTE:https://mundoeducacao.uol.com.br/matematica/escalonamento-sistemas.htm#:~:text=O%20sistema%20de%20escalonamento%20de,pertencentes%20às%20linhas%20da%20matriz.*/    
console.log("use apenas números, não use letras, simbolos ou qualquer outra coisas que não seja NÚMEROS.")


contador = 1
var resultado = []
var vetor = []

linhas = Number(prompt('Digite os numeros de linhas: '))
colunas = Number(prompt('Digite os numeros de colunas: '))
muti = Number(prompt('Digite um numero do grupo dos reais, que vai mutiplicar toda a matriz : '))

    

for(var i = 0; i < linhas; i++){
    resultado.push([]);
    vetor.push([]);
}

for (let i = 0; i < linhas ; i++) {
       
    for (let j = 0; j < colunas; j++) {
        console.log('Digite o numero da ' + contador + "º linha")
        vetor[i][j] = Number(prompt('Digite:'))
    }
    contador++
}
for (let i = 0; i < vetor.length; i++) {

    for (let j = 0; j < vetor[i].length; j++) {
        
        resultado[i][j] = (vetor[i][j] * muti)  
    }
        
}
console.log(vetor)
console.log(resultado)
}
//------------------------------------------------------------------------------------//
function somaMatriz() {
  
linhas = Number(prompt('Digite o numero de linhas: '))
colunas = Number(prompt('Digite o numero de colunas: '))
    
    
/*Se subtrair a matriz A com a matriz B de mesma ordem, A - B = C, 
teremos como resultado outra matriz C de mesma ordem e para formar 
os elementos de C subtrair os elementos correspondentes de A e B  FONTE:https://brasilescola.uol.com.br/matematica/adicao-subtracao-matrizes.htm#:~:text=Se%20somarmos%20a%20matriz%20A,%2B%20b11%20%3D%20c11.&text=Assim%3A%20A%20%2B%20B%20%3D%20C,ordem%20de%20A%20e%20B.*/
contador = 1
matriz1 = []
matriz2 = []
r1 = []
    
for (let i = 0; i < linhas; i++) {
    matriz1.push([])  
    matriz2.push([])  
    r1.push([])
}
console.log("Primeira matriz")
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        console.log(' Digite o numero da ' + contador + "º linha da matriz")
        matriz1[i][j] = Number(prompt('Digite: '))
    }
contador++  
}
contador = 1
console.log(("Segunda matriz"))
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        console.log(' Digite o numero da ' + contador + "º linha da matriz")
        matriz2[i][j] = Number(prompt('Digite: '))
    }
    contador++   
}
    
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        // usamos um for para ir en todos os elemetos das duas matriz e somar os valores
        r1[i][j] = (matriz1[i][j]  + matriz2[i][j])  
    }
}
console.log("Primara matriz", matriz1)
console.log("Segunda matriz", matriz2) 
console.log("A soma das matrizes é: ", r1)
}
//---------------------------------------------------------------------------------------------------//  

function subitracaoMatriz() {
/*As duas matrizes envolvidas na subtração devem ser da mesma ordem. 
E a diferença delas deverá dar como resposta outra matriz, mas de mesma ordem. Assim temos: Se subtrairmos a matriz A da matriz B de mesma ordem, 
A – B = C, obteremos outra matriz C de mesma ordem.FONTE: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwigl-Og6rnyAhVTpJUCHd_aBZsQFnoECB4QAw&url=https%3A%2F%2Fbrasilescola.uol.com.br%2Fmatematica%2Fadicao-subtracao-matrizes.htm%23%3A~%3Atext%3DAs%2520duas%2520matrizes%2520envolvidas%2520na%2Cmatriz%2520C%2520de%2520mesma%2520ordem.&usg=AOvVaw28cfWdYdULZatXN-uCer06*/  
linhas = Number(prompt('Digite o numero de linhas: '))
colunas = Number(prompt('Digite o numero de colunas: '))
    
    
/*Se somarmos a matriz A com a matriz B de mesma ordem, A + B = C, 
teremos como resultado outra matriz C de mesma ordem e para formar 
os elementos de C somaremos os elementos correspondentes de A e B */
contador = 1
matriz1 = []
matriz2 = []
r1 = []
    
for (let i = 0; i < linhas; i++) {
    matriz1.push([])  
    matriz2.push([])  
    r1.push([])
}
console.log("Primeira matriz")
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        console.log(' Digite o numero da ' + contador + "º linha da matriz")
        matriz1[i][j] = Number(prompt('Digite: '))
    }
contador++  
}
contador = 1
console.log(("Segunda matriz"))
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        console.log(' Digite o numero da ' + contador + "º linha da matriz")
        matriz2[i][j] = Number(prompt('Digite: '))
    }
contador++   
}
   
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        // usamos um for para ir en todos os elemetos das duas matriz e somar os valores
        r1[i][j] = (matriz1[i][j]  - matriz2[i][j])  
    }
}
console.log("Primara matriz", matriz1)
console.log("Segunda matriz", matriz2) 
console.log("A subtração das matrizes é: ", r1)
}
//------------------------------------------------------------------------------------------------//
function transposta() {
    console.lop("So funciona com matriz de ordem quadrada.")
/*Matriz transposta da matriz Am x n é a matriz que obtemos trocando ordenadamente de posição as linhas, 
pelas colunas. 
Ou seja, se Am x n então Atn x m. FONTE:https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiH7Mu86rnyAhWgpZUCHfzpB5gQFnoECBoQAw&url=https%3A%2F%2Fwww.proenem.com.br%2Fenem%2Fmatematica%2Fmatrizes-teoria-nomenclatura-e-operacoes-basicas%2F%23%3A~%3Atext%3DMATRIZ%2520TRANSPOSTA%2520(AT)%2Cm%2520x%2520n%2520ent%25C3%25A3o%2520Atn%2520x%2520m.&usg=AOvVaw0tSCbohZTCRSMAgN6aEahJ */
var arr = []
var contador = 1
linhas = Number(prompt('Digite a quantidade de linhas que vai ter a matriz: '))
colunas = Number(prompt('Digite a quantidade de colunas que vai ter a matriz: '))
for (let i = 0; i < linhas; i++) {
    arr.push([])
}
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        console.log('Digite o numero da ' + contador + "º linha da matriz")
        arr[i][j] = Number(prompt('Digite: '))  
    }
    contador++ 
}
console.log(arr)
const transpose = arr => {
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < i; j++) {
        const tmp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = tmp;
        };
    }
}
transpose(arr);
console.log(arr);
}

function sobre() {
    console.log("--------- Nome dos participantes ----------")
    console.log("Denilson de Oliveira Carneiro")
    console.log("Paloma Luiza de Souza França")
    console.log("Gilvan Pereira de Souza")
    console.log("Lucas de Alves da Silva")
}
var opcao = - 1

do { // exemplo clássico da utilização do do...while

	imprimirMenu()

	opcao = Number(prompt('Digite uma opção: '))

	// adicionem novos cases para novas opções
	switch (opcao) {
		case 1:
			determinate2x2()
			break
		case 2:
			determinate3x3()
			break
		case 3:
			determiante4x4()
			break	
		case 4:
			mutiplicacaoEscalonar()
			break
		case 5:
			somaMatriz()
			break
        	case 6:
            		subitracaoMatriz()
            		break  
        	case 7:
            		transposta()
            		break  
        	case 8:
            		sobre()
            		break
    }

} while (opcao <= 8 && opcao >= 1)
