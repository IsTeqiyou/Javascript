async function calculateDivision(dividend, divisor) {
    try {
      if (divisor === 0) {
        throw new Error("Pembagi tidak boleh 0");
      }
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const quotient = dividend / divisor;
          if (quotient % 1 === 0) {
            resolve(quotient);
          } else {
            reject(new Error("Hasil pembagian bukan bilangan bulat"));
          }
        }, 1000);
      });
      console.log("Hasil pembagian:", result);
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  }
  
  // Contoh penggunaan
  calculateDivision(10, 2); // Hasil pembagian: 5
  calculateDivision(10, 0); // Terjadi kesalahan: Pembagi tidak boleh 0
  calculateDivision(10, 3); // Terjadi kesalahan: Hasil pembagian bukan bilangan bulat