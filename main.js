// EXO 2
let maBoolean= true;

// EXO 3
let monArray= [];

// EXO 4
let voiture = {
    couleur: "rouge",
    portes: 5
    //etc...
}

//  EXO 5
let monString= "Vander";

// EXO 6
let monInt= 3;

// EXO 7
class Lieu {

    constructor(nom){
        this.nom= nom
        
    } 
payer(){

}

    }

// EXO 8
let affichage= ()=>{ console.log ("Bravo champion")}

// EXO 9
if (monInt < 8){
    console.log(monInt+ " est plus petit que 8")
}

else {console.log (monInt +" est plus grand que 8")}

// EXO 10
for (let i=0; i<10; i++){
    console.log(i)
}

// EXO 11
let dateActuelle = new Date(Date.UTC(2020, 0, 21, 1, 0, 0));
console.log(dateActuelle.toLocaleDateString({year:"2-digit",month:"2-digit", day:"2-digit"}));

// EXO 12
let phrase = 'Salut Coding-11';
console.log(phrase.toUpperCase());

// EXO 13
let phrase2 = 'Salut Coding-11, comment allez vous?';


function firstMajuscule(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(firstMajuscule(phrase2));

// EXO 14
let prenom=()=>{prompt("Ecrivez un prenom et je vous dirai cmb de caractère celui-ci contient")    
console.log(prenom+ " contient "+prenom.length+ " caractères")
} 

// EXO 15
let hasard=()=>{ Math.floor(Math.random() * Math.floor(100))
alert("voici votre numéro tirée aléatoirement "+ hasard)
}

// EXO 16
let a= parseInt(prompt("Entrez un premier chiffre svp!"))
let b= parseInt(prompt("Entrez un second chiffre svp!"))
let hasard2= [a,b]

hasard2.sort(() => Math.random() - 0.1);


alert(hasard2[0])


// EXO 17

let valeurUtilisateur= prompt("Veuillez entrer une donnée");
console.log(typeof(valeurUtilisateur))