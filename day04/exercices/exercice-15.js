/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

function soort(arr1, arr2) {
  let murge = [...arr1, ...arr2];
  // console.log(murge);

  for (let i = 0; i < murge.length; i++) {
    for (let j = 0; j < murge.length - 1; j++) {
      if (murge[j] > murge[i]) {
        let temp = murge[j];
        murge[j] = murge[i];
        murge[i] = temp;
      }
    }
  }

  return murge;
}

console.log(soort(arr1, arr2));
