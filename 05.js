function hasSum(list, k) {
    const complements = new Set(); //stocke les nombres dont on a besoin pour atteindre la somme k
  
    for (let i = 0; i < list.length; i++) {
      const complement = k - list[i];
  
      if (complements.has(complement)) {
        return true;
      }
  
      complements.add(list[i]);
    }
  
    return false;
  }
  
  // Exemple d'utilisation
  const list = [3, 7, 8, 3, 6, 1];
  const k = 7;
  const resultat = hasSum(list, k);
  console.log(resultat); // Affiche true
  
