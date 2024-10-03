// praktek 1

let hari = 'sabtu'

switch (hari) { // untuk memeriksa nilai variabel (hari) //
    case 'senin': // kasus pertama //
        console.log("Weekday") // untuk menampilkan output (console.log)    //
        break; // menghentikan perulangan //
    case 'selasa':
        console.log("Weekday")
        break;  
    case 'rabu':
        console.log("Weekday")
        break;
    case 'kamis':
        console.log("Weekday")
        break;
    case 'jumaat':
        console.log("Weekday")
        break;
    case 'sabtu':
        console.log("Weekend")
        break;
    case 'minggu':
        console.log("Weekend") // string teks hasil dari console.log //
        break;
        
    default:
        break;
}


// praktek 2

for (let i = 1; i <= 15; i++) { // berjalan hinnga 1 dan lebih kecil dari 15 //
    if (i % 3 === 0 && i % 5 === 0) { // maka keluaran adalah fizzbuzz //
        console.log("FizzBuzz",i );
    } else if (i % 3 === 0) { // dibagi 3 //
        console.log("Fizz",i);
    } else if (i % 5 === 0) { // dibagi 5 //
        console.log("Buzz",i);
    } else if(i%11 ===0) {
        console.log(i); // dibagi 11 //
    }
}

// praktek 3

for (let angka = 1; angka <= 10; angka++) { // berjalan 1 dan lebih kecil d ari 10 //

    if (angka % 2 === 0) {
        console.log("Genap", angka);
    } // jika angka habis dibagi 2 //
    
} 

// praktek 4

for (let angka2 = 1; angka2 <= 15; angka2++) {  

    if (angka2 % 3 === 0) {
        console.log("Genap", angka2);
        }  // jika angka habis dibagi 3 //      