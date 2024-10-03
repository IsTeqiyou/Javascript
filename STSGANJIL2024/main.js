// main.js

const kelompokkanBilangan = require('./exam');

for (let i = 1; i <= 20; i++) {
    const kategori = kelompokkanBilangan(i);
    console.log(`Bilangan ${i} adalah ${kategori}.`);
}
