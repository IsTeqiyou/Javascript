async function simulateDelay() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Delay finished";
  }
  
  simulateDelay().then(result => console.log(result));