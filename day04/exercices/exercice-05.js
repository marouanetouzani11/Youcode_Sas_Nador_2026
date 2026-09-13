/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * CHERCHER UNE VALEUR (INCLUDES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "Marrakech" est présent dans le tableau villes = ["Rabat", "Casablanca", "Tanger"]. Affichez true ou false.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day04/exercices/exercice-05.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let villes = ["Rabat", "Casablanca", "Tanger", "Marrakech"];
let count = 0;

for (let i = 0; i < villes.length; i++) {
  if (villes[i] == "Marrakech") {
    count++;
  }
}

if (count > 0) {
  console.log("true");
} else {
  console.log("false");
}

// ou cette solution:
// console.log(villes.includes("Marrakech"));
