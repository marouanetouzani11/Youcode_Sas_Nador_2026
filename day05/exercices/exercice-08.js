/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CAPITALISATION (TITLE CASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction capitaliser(mot) qui prend "yOUcoDe" et retourne "Youcode" (seule la première lettre est en majuscule, le reste en minuscules).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let word = "yOUcoDe";
console.log(capitaliser(word));

function capitaliser(mot) {
  let i = 0;
  let newStr = "";
  while (mot[i] !== undefined) {
    if (i == 0) {
      newStr += mot[i].toUpperCase();
    } else {
      newStr += mot[i].toLowerCase();
    }

    i++;
  }
  return newStr;
}
