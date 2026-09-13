/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let arr = [12, 33, 40, 55, 66, 6];

function MinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return [min, max];
}

let modifiedArr = MinMax(arr);
console.log("Max = " + modifiedArr[1]);
console.log("Min = " + modifiedArr[0]);
