// exam.js

function kelompokkanBilangan(bilangan) {
    if (bilangan % 2 === 0) {
        return 'genap';
    } else {
        return 'ganjil';
    }
}

module.exports = kelompokkanBilangan;
