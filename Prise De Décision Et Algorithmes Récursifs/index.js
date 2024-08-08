// Prise de Décision

// Vérificateur d'année bissextile
function estBissextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return `${annee} est une année bissextile.`;
  } else {
    return `${annee} n'est pas une année bissextile.`;
  }
}

// Exemples
console.log(estBissextile(2020)); // 2020 est une année bissextile.
console.log(estBissextile(2021)); // 2021 n'est pas une année bissextile.

// Tarification des billets
function prixBillet(age) {
  if (age <= 12) {
    return "Le prix du billet est de 10 $.";
  } else if (age >= 13 && age <= 17) {
    return "Le prix du billet est de 15 $.";
  } else {
    return "Le prix du billet est de 20 $.";
  }
}

// Exemples
console.log(prixBillet(10)); // Le prix du billet est de 10 $.
console.log(prixBillet(15)); // Le prix du billet est de 15 $.
console.log(prixBillet(25)); // Le prix du billet est de 20 $.

// Récursivité

// Suite de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Exemples
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

// Vérificateur de palindrome
function estPalindrome(chaine) {
  chaine = chaine.toLowerCase().replace(/[^a-z0-9]/g, "");
  function verifierDebutFin(debut, fin) {
    if (debut >= fin) {
      return true;
    } else if (chaine[debut] !== chaine[fin]) {
      return false;
    } else {
      return verifierDebutFin(debut + 1, fin - 1);
    }
  }
  return verifierDebutFin(0, chaine.length - 1);
}

// Exemples
console.log(estPalindrome("A man, a plan, a canal, Panama")); // true
console.log(estPalindrome("racecar")); // true
console.log(estPalindrome("hello")); // false

// Fonction puissance
function puissance(base, exposant) {
  if (exposant === 0) {
    return 1;
  } else {
    return base * puissance(base, exposant - 1);
  }
}

// Exemples
console.log(puissance(2, 3)); // 8
console.log(puissance(5, 4)); // 625
