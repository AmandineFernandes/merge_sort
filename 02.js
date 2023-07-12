const numbers1 = [3, 7, 8, 3, 6, 1];
const numbers2 = [1, 4, 5, 8];


    function check (numbers) {
        const length = numbers.length;
        let count = 0;
            for (let i = 0; i < length; i++){
                let sunsetview = true
                    for (let j = i + 1; j < length; j++) {
                        if (numbers[j] >= numbers[i]) {
                            sunsetview = false
                            break;
                        }
                    }

                    if (sunsetview){
                        count++;
                    }
            }

        return count
    }

console.log(check(numbers1));
console.log(check(numbers2));