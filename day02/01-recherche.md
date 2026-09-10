# 🔎 Jour 02 — Recherche

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

> Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> La différence principale est que la boucle `for` s'utilise quand on connaît à l'avance le nombre de répitions, tandis que la boucle `while` s'utilise quand la répétition dépend d'une condition dont on ne connait pas le moment exact où elle va s'arrêter.

---

### Question 02

> À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> La boucle do...while sert à exécuter un bloc de code au moins une fois, puis à répéter cette action tant qu'une condition reste vraie.

---

### Question 03

> Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> Si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle while, la condition reste toujours vraie (true) et la boucle s'exécute indéfiniment.



---

### Question 04

> À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> nous utilisons « break » pour interrompre l'exécution de la ligne suivante si la condition est vraie

---

### Question 05

> À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> The continue statement terminates the execution of the current iteration in a loop and immediately jumps to the next iteration.
``
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; //Si i est pair, ignorer le reste du bloc de boucle
  }
  console.log(i); //Cette ligne est ignorée pour les nombres pairs.
}
``



---

### Question 06

> Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> dans une boucle « for » 



---

### Question 07

> Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

>Oui Est-il possible.

---

### Question 08

> Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?

- [] J'ai recherché et compris la notion.

**Ma réponse :**

> Une boucle imbriquée est une boucle située à l'intérieur d'une autre boucle (boucle interne et boucle externe).
On l'utilise notamment lorsqu'on souhaite afficher un tableau en deux dimensions.

---

### Question 09

> Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> Le principal risque en termes de performances lié à l'utilisation de boucles imbriquées multiples est la croissance exponentielle de la complexité temporelle, qui entraîne une explosion du temps d'exécution à mesure que la taille des données d'entrée augmente.

---

### Question 10

> Peut-on utiliser un `switch` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> Oui, il est tout à fait possible d'utiliser une instruction `switch` à l'intérieur d'une boucle 


## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
