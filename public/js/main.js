// # Exercice 1
// 1. Créer une boucle, tant que l'utilisateur ne rentre pas de valeur dans un prompt, demandé lui de re rentré une nouvelle valeur 
// let val = parseInt(prompt('entrez une valeur'));
// while (val = 0) {
//     val = parseInt(prompt('rentrez une nouvelle valeur'));
// }
// 2. Créer une boucle, tant que l'utilisateur donne un chiffre plus petit que 10, demandé lui de re rentré une nouvelle valeur
// let val = parseInt(prompt('entrez une valeur'));
// while (val < 10) {
//     val = parseInt(prompt('rentrez une nouvelle valeur'));
// }
// # Exercice 2
// ## Boucle avec condition
// 1. Créer une boucle qui s'incrémente de 1 et qui affiche uniquement les nombres impair, cette boucle s'incrémente jusqu'a 11
// for (let i = 0; i <= 11; i++) {
//     if (i % 2) {
//         console.log(i);
//     }
// }
// let val = 0;
// while (val <= 11) {
//     if (val % 2 == 1) {
//         console.log(val);
//     } 
    // val++
// }
// 2. Créer un programme qui demande le prénom de la personne, qui affiche la longueur de son prénom et affiche autant de fois le prénom qu'il y a de lettre
// let prenom = prompt('entrez votre prenom');
// let prenomTaille = prenom.length;
// let compt = 0;
// while (compt < prenomTaille) {
//   console.log(prenom);
//   compt++  
// }


// 3. Créer un programme qui affiche chaque lettre du prénom une par une

// let prenom2 = prompt('entrez votre prenom');
// let compte = 0;
// let prenomTaille2 = prenom.length

// while (compte < prenomTaille2) {
//     console.log(prenom2.charAt(compte));
//     compte++
// }

// # Exercice 3
// ## Boucle avec condition et method
// 1. Créer un programme qui affiche chaque lettre du prénom MAIS à chaque tour impair la lettre sera en majuscule
// let prenom3 = prompt('entrez votre prenom');
// let comp = 0;
// let prenomTaille3 = prenom3.length;

// while (comp < prenomTaille3) {
//     if (comp % 2 == 1) {
//         console.log(`${prenom3.charAt(comp).toUpperCase()}`);
//     }
//     else {
//         console.log(`${prenom3.charAt(comp).toLowerCase()}`);
//     }
//     comp++
// }

// 2. Créer un programme qui demande d'entrer un calcul, laisse le choix a l'utilisateur , exemple 3,5 * 3 et si la réponse est a virgule il faut afficher le résultat au nom entier le plus haut
// methode eval
// let calcul = prompt('quel est ton calcul?');
// let condition = true;

// while (condition == true) {
//     console.log(Math.ceil(eval(calcul)));
//     let stop = prompt('Veux-tu arreter ?')
//     if (stop == "oui") {
//         condition = false 
//         console.log('Merci.');
//     } else {
//         calcul = prompt("Quel est ton calcul ?");   //3.5 * 2.5
//     }
// }

// 3. Créer un programme qui vérifie la longueur du prénom qui doit etre plus grand que 5 caractères et qui doit etre tout en minuscule, une fois que les conditions sont respectés, afficher le prénom en majuscule
let nom = prompt('entrez votre prenom');

while (nom <= 5) {
    console.log(nom.toLowerCase);
}
if (nom >= 5) {
    console.log(nom.toUpperCase);
}
