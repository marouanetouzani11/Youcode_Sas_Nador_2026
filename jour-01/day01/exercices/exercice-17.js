/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let joueur1 = "pierre";
let joueur2 = "ciseaux";

let j1 = joueur1
let j2 = joueur2
if (j1 === j2) {
  console.log("Égalité !");
}
else if (
  (j1 === "pierre" && j2 === "ciseaux") ||
  (j1 === "ciseaux" && j2 === "feuille") ||
  (j1 === "feuille" && j2 === "pierre")
) {
  console.log("Joueur 1 gagne !");
}
else if (
  (j2 === "pierre" && j1 === "ciseaux") ||
  (j2 === "ciseaux" && j1 === "feuille") ||
  (j2 === "feuille" && j1 === "pierre")
) {
  console.log("Joueur 2 gagne !");
}
else {
  console.log("Choix invalide, veuillez choisir Pierre, Feuille ou Ciseaux.");
}
