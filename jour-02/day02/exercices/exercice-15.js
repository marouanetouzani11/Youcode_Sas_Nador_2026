/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LA PYRAMIDE DE MARIO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez dans la console une demi-pyramide d'étoiles de 5 lignes :
 *
 * - - -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day02/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.



let n = 10
for (let i = 1; i <= n; i++){

  for (let space = n; space >= i; space--){
    process.stdout.write(" ");
  }

  for (let star = 1; star <= i; star++) {
    process.stdout.write("* ");
  }
  console.log()
}
