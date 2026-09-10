/**
 * JOUR 01 — GUIDE 01
 * Le Permutateur (Variables)
 *
 * OBJECTIF
 * Vous avez deux variables a = 5 et b = 10. Vous devez échanger leurs valeurs pour que a vaille 10 et b vaille 5.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
let a = 10
let b = 5

console.log("Avant échanger leurs valeurs")
console.log("A = " + a + "\nB = " + b)

let temp = a
a = b
b = temp

console.log("Apres échanger leurs valeurs")
console.log("A = " + a + "\nB = " + b)
