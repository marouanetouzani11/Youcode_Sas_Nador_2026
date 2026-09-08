# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

`let` Permet la réaffectation. Utilisez cette fonction lorsque vous savez qu'une valeur doit changer (comme un score de jeu, un compteur de boucle ou un commutateur à bascule).
`let A = 10`
la valeur de A est: `10`
`A = 20`
La valeur de A est désormais égale à `20`



`const` const : abréviation de « constant ». Cette déclaration ne permet pas de réaffecter une valeur. Si vous essayez d'écrire `const A = 10; A = 20;`, JavaScript renverra une erreur `TypeError`.



`var` est le mot-clé d'origine utilisé pour déclarer des variables en JavaScript depuis la création du langage en 1995.
`var` a une portée au niveau de la fonction : une variable déclarée avec `var` ignore les blocs `{}` et est accessible partout au sein de la fonction dans laquelle elle a été créée. Si elle n'est pas déclarée dans une fonction, elle devient globale.

---

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une type de données primitifs en JavaScript
l existe 7 types de données primitives  

1 - `string` (Chaîne de caractères): `"My name is Marouane"`  

2 - `number` (Nombre): `12 ou 144,12 ...`  

3 - `bigint` (Grand entier): nombres entiers très grands  `9007199254740991n`  

4 - `boolean` (Booléen): `true` ou `false`  

5 - `undefined` (Non défini): Valeur automatique d'une variable qui vient d'être déclarée mais à laquelle aucune valeur n'a encore été assignée  

6 - `null` (Nul): Le mot-clé `null` fait référence à la valeur primitive `null`, qui représente l'absence intentionnelle de toute valeur d'objet.  

7 - `symbol` (Symbole): Chaque fois que vous appelez la fonction Symbol(), celle-ci génère une valeur entièrement nouvelle et unique. Même si vous fournissez exactement la même description, les symboles sont fondamentalement différents.  


---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

C'est considéré comme une erreur historique parce que null n'est pas un objet, c'est une valeur primitive représentant l'absence intentionnelle de toute valeur d'objet.

---

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

== (égalité souple) : compare uniquement la valeur. Si les types sont différents, JavaScript essaie de les convertir automatiquement.
Exemple : 5 == "5" donne true (le nombre 5 est égal au texte "5").

=== (égalité stricte) : compare la valeur ET le type. Rien n'est converti.
Exemple : 5 === "5" donne false (l'un est un nombre, l'autre est du texte).

---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

résultat 5 + "5" donne la chaîne "55" non le nombre 10

---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

exemple simple 10 % 3 donne 1 car 10 divisé par 3 fait 3, et il reste 1
donc le modulo donne le reste

---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

&& ET logique  exige que toutes les conditions soient vraies pour valider le test. Si une seule est fausse, tout devient faux
|| OU logique exige qu'au moins une condition soit vraie. Il devient faux uniquement si toutes les conditions sont fausses


---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

oui, c'est tout à fait possible l'instruction switch sert précisément d'alternative à une longue chaîne de if  else if

---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une valeur "falsy" ou fausse est une valeur qui est automatiquement considérée comme false lorsqu'elle est évaluée dans un contexte booléen, comme dans une condition if.

    0 le nombre zéro

    "" une chaîne de caractères vide

    null l'absence intentionnelle de valeur

## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
