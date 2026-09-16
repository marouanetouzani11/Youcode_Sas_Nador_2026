/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [
  { nom: "Maroune", score: 123 },
  { nom: "Salah", score: 97 },
  { nom: "Yassir", score: 143 },
]


function meilleur(arr) {
	let hold = arr[0].score

	for (let i = 0; i < arr.length; i++){
		if (arr[i].score > hold){
			hold = arr[i]
		}
	}

	return hold
}

console.log(meilleur(candidats))
