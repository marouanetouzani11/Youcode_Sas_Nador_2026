/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day04/exercices/exercice-12.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let doublons = [1, 2, 2, 3, 4, 4, 5];
function nodoublons(arr) {
 let New = []
 for (let i = 0; i < arr.length; i++){
    if(arr[i] != arr[i + 1]){
        // console.log(arr[i])
        New.push(arr[i])
    }
 }

 return New
}

console.log(nodoublons(doublons));
