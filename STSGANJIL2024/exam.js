// exam.js
export function kelompokkanBilangan(bilangan) {
    if (bilangan < 0) {
      return 'negatif';
    } else if (bilangan === 0) {
      return 'nol';
    } else if (bilangan % 2 === 0) {
      return 'genap'; 
    } else {
      return 'ganjil'; 
    }
  }
  