/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day04/exercices/exercice-09.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function NOUVEAUtableau(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(NOUVEAUtableau(arr));
