/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [
  { nom: "Maroune", score: 12 },
  { nom: "Salah", score: 9 },
  { nom: "Yassir", score: 16 },
]


function ayant10(arr){
	let hold = []

	for (let i = 0; i < arr.length; i++){
		if(arr[i].score >= 10 ){
			hold.push(arr[i])
		}
	}

	return hold
}

console.log(ayant10(candidats));
