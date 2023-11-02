/* function sommePaire(tableau){
const somme = tableau.filter((nombre)=> nombre % 2 == 0).reduce((total, nombre)=> total + nombre, 0)


//Utile en dev by Wendy


//for(i = 0 ; i < tableau.length ; i++){
    
//if(tableau[i] % 2 == 0){
 //somme = somme + tableau[i]
//}
//}

return somme
}

const result = sommePaire([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
//2+4+6+8+10+12+14+16+18+20 = 110
console.log(result); */






/* function test(string1, string2){
    let result = true

    for(i = 0 ; i < string1.length && i < string2.length ; i++) {
         const j = string2.length -1 -i
         console.log("i:", i , " j:", j);
        result = result && (string1[i] == string2[i] || string1[i] == string2[j])
    }
 return result
}
const resultTestTrue = test("dog", "god")
const resultTestFalse= test("dag", "god")

console.log(resultTestTrue, resultTestFalse); */

let X = null;
let Y = null;


/* function sensX(value){
    document.getElementById('display').value += "X:"+ value ;
    X = value;
    console.log(X);
   
}

function sensY(value){
    document.getElementById('display').value += "Y:"+ value ;
    Y = value;
    console.log(Y);
}
 */
function numberOfDeplacement() {
   document.getElementById('display').value += calculDeplacement()
}

function calculDeplacement(){
    const myCase = document.getElementsByClassName("case");
    let nbOfClic = 0;
   
    for (i = 0; i < myCase.length; i++) {
            myCase[i].addEventListener('click', function(){
                nbOfClic++;

                return nbOfClic;
            });
            console.log("Deplacement:" + nbOfClic);
  
    }
}
function myPosition(x, y) {
    x = X;
    y = Y;
}

function changeColor(element) {
    element.style.backgroundColor = "green";
}


function player(deplacementX, deplacementY) {
    const positionArrivée = document.getElementById('h');
    positionArrivée.style.backgroundColor = "red";
    const positionJoueur = document.getElementById('m');
    let positionJoueurX = 1;
    let positionJoueurY = 1;
    let myPosition = positionJoueurX && positionJoueurY;
    positionJoueur.style.backgroundColor = "blue";
    let nombreDeplacement = 0;
    console.log(positionJoueurX, positionJoueurY);
    for (i = 0; i < deplacementX.length && i < deplacementY.length; i++) {
        if (deplacementX[i] > positionJoueurX) {
            nombreDeplacement = nombreDeplacement + 1;
        }
        if (deplacementY[i] > positionJoueurY) {
            nombreDeplacement = nombreDeplacement + 1;
        }
        if (positionArrivée === myPosition) {
            alert("gagné!")
        }
        console.log(nombreDeplacement);
    }



}






function deplacement(x, y) {
    let sens = ""
    if (sens === "Haut" || sens === "Bas" || sens === "Droite" || sens == "Gauche") {
        if (sens === "Haut") {
            y = y + 1
        }
        if (sens === "Bas") {
            y = y - 1
        }
        if (sens === "Droite") {
            x = x + 1
        }
        if (sens === "Gauche") {
            x = x - 1
        }
    }
    return { x, y }
}


const result = deplacement(1 + 1, 1 + 1 + 1)
console.log(result.y, result.x);
