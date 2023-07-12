function hasSum(list, k) {
    let complements = new Set();
    
    for (let i = 0; i < list.length; i++) {
      let complement = k - list[i];

      console.log(`Tour ${i + 1}:`);
      console.log(`- Élément actuel : ${list[i]}`);
      console.log(`- Complément recherché : ${complement}`);
      console.log(`- Nombres visités : ${Array.from(complements)}`);

      if (complements.has(complement)) {
        return true;
      }
      complements.add(list[i]);
    }
    
    return false;
  } 

    let list = [1, 2, 3, 4, 5];
    let k = 7;

console.log(hasSum(list, k)); //résultat: true car 5 + 2 = 7

    k = 10;

console.log(hasSum(list, k)); //résultat: false car il n'y a pas car il n'y a pas deux nombres ayant 10 comme résultat de leur addition 