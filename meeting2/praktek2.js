// praktek 2
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz", i);
    } else if (i % 3 === 0) {
        console.log("Fizz", i);
    } else if (i % 5 === 0) {
        console.log("Buzz", i);
    } else if (i % 11 === 0) {
        // Tidak ada yang perlu dicetak
    } else {
        console.log(i);
    }
}