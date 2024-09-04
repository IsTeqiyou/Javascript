// Buat kode kamu di bawah ini
function mandi() {
    console.log("Mandi");
  }
  
  mandi();
  function sarapan() {
    setTimeout(function() {
      console.log("Sarapan tertunda 3 detik");
    }, 3000);
  }
  
  sarapan();
  function berangkatSekolah() {
    console.log("Berangkat Sekolah");
  }
  
  berangkatSekolah();
  function mandi() {
    console.log("Mandi");
  }
  
  function sarapan(callback) {
    console.log("Sarapan");
    callback();
  }
  
  function berangkatSekolah() {
    console.log("Berangkat Sekolah");
  }
  
  mandi();
  sarapan(berangkatSekolah);
  function mandi() {
    console.log("Mandi");
  }
  
  function sarapan(callback) {
    console.log("Sarapan");
    callback();
  }
  
  function berangkatSekolah() {
    console.log("Berangkat Sekolah");
  }
  
  mandi();
  sarapan(berangkatSekolah);
  //soal 1//
  function printMessages() {
    console.log("Mulai");
    setTimeout(() => {
      console.log("Selesai");
    }, 2000);
  }
  
  printMessages();
  //soal 2//
  function printEverySecond() {
    let counter = 0;
    const intervalId = setInterval(() => {
      console.log("Hello, World!");
      counter++;
      if (counter === 5) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  printEverySecond();
  //soal 3//
  function greet(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();
    }, 1000);
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Anda", sayGoodbye);    
  //soal 4//
  function performTasks() {
    // Tugas pertama: Cetak "Tugas 1" ke konsol
    console.log("Tugas 1");
  
    // Tugas kedua: Setelah 3 detik, cetak "Tugas 2" ke konsol
    setTimeout(() => {
      console.log("Tugas 2");
    }, 3000);
  
    // Tugas ketiga: Setelah 1 detik dari tugas kedua, cetak "Tugas 3" ke konsol
    setTimeout(() => {
      console.log("Tugas 3");
    }, 4000); // 3000 (tugas kedua) + 1000 (tugas ketiga)
  }
  
  performTasks();
  //soal5//
  function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  delayedMessage("Hello after delay", 2000);