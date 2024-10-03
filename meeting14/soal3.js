function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Task 1 selesai');
        resolve('Hasil task 1');
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Task 2 selesai');
        resolve('Hasil task 2');
      }, 2000);
    });
  }
  
  async function performTasks() {
    const result1 = await task1();
    const result2 = await task2();
  
    console.log('Hasil task 1:', result1);
    console.log('Hasil task 2:', result2);
  }
  
  performTasks(); 