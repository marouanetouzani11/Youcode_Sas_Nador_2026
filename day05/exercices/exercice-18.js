/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let text = "KidTime StoryTime An online library offers read-aloud children's books with animated puppets. Content includes searchable playlists, music, and educational worksheets. The storyteller is an award-winning author. Supplementary materials and bilingual selections are available."

function charCount(str){
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == "e" || str[i] == "E"){
            count++
        }
    }
    return count
}

console.log(charCount(text));
