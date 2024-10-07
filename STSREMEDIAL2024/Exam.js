export function analisisdata() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
      let divisibleByFour = i % 4 === 0 ? "bisa dibagi 4" : "tidak bisa dibagi 4";
      let oddEven = i % 2 === 0 ? `genap ${"dan " + divisibleByFour}` : `ganjil`;
  
      result.push(`${i} adalah bilangan ${oddEven}`);
    }
    return result;
  }