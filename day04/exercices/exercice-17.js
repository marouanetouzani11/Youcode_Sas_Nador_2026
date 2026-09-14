/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let mots = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];

apparaît(mots);

function apparaît(arr) {
  let seen = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (!seen.includes(current)) {
      let count = 0;

      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === current) {
          count++;
        }
      }

      seen.push(current);
      console.log(current + " : " + count);
    }
  }
}

console.log(apparaît(mots))