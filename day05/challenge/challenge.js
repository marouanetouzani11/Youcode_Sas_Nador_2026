/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
"use strict";

// Découpe d'abord le problème en petites étapes.
let interdits = ["nOob", "idiot", "nul"];
let text =
  "Ce joueur est vraiment nul c'est un pur noob qui joue comme un idiot";

let arr = text.split(" ");

function filtrerMessage(message) {
  let hold = [];
  let i = 0;
  while (message[i] !== undefined) {
    if (
      message[i].toLowerCase() == interdits[0].toLowerCase() ||
      message[i].toLowerCase() == interdits[1].toLowerCase() ||
      message[i].toLowerCase() == interdits[2].toLowerCase()
    ) {
      for (let j = 0; j < message[i].length; j++) {
        message[i] = message[i].replace(message[i][j], "*");
      }
    }
    hold.push(message[i]);
    i++;
  }

  return hold;
}
let allo = filtrerMessage(arr).join(" ");
console.log(allo);
