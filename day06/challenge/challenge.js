/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
"use strict";

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let utilisateurs = [
  {
    nom: "Hassan",
    email: "Hassan@gmail.com",
    id: 5,
  },
];


function ajouterUtilisateur(nom, email) {
  let id = Math.floor(Math.random() * 9) + 1;

  let newUtilisateurs = {
    nom: nom,
    email: email,
    id: id,
  };

  return newUtilisateurs;
}

utilisateurs.push(ajouterUtilisateur("Anass", "Anass@gmail.com"));
utilisateurs.push(ajouterUtilisateur("Marouane", "Marouane@gmail.com"));
utilisateurs.push(ajouterUtilisateur("Yassir", "Yassir@gmail.com"));
utilisateurs.push(ajouterUtilisateur("Ibrahim", "Ibrahim@gmail.com"));
utilisateurs.push(ajouterUtilisateur("Hicham", "Hicham@gmail.com"));
console.log("tous les utilisateurs\n\n")
console.log(utilisateurs)


function trouverParEmail(email) {
	console.log(email);
	
  let hold;
  for (let i = 0; i < utilisateurs.length; i++) {
    hold = utilisateurs[i];

    if (hold.email == email) {
      return hold;
    }
  }
}
console.log("\n\n\n")
console.log("l'e-mail que vous recherchez est: ");
console.log("\n")
console.log(trouverParEmail("Hicham@gmail.com"))

function supprimerParId(id) {
  for (let i = 0; i < utilisateurs.length; i++) {
    if (id == utilisateurs[i].id) {
		console.log("L'utilisateur que vous supprimez est:\n", utilisateurs[i]);
      utilisateurs.splice(i, 1);
      return true;
    }
  }
  return false;
}
console.log("\n\n\n")
console.log(supprimerParId(5));
console.log("\n\n\n")
console.log("le résultat final\n")

console.log(utilisateurs)