const numbers1 = [10, 15, 3, 7];
const numbers2 = [1, 8, 10, 21];

const ki = 17;
const kj = 19;

    function check (numbers, k) {
        const length = numbers.length;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (numbers[i] + numbers[j] === k) {
                    return true;
                }
            }
        }
                    return false;
    }

console.log(check(numbers1, ki));
console.log(check(numbers2, kj));
