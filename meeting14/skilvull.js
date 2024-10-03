latihan

// Buat kode kamu di bawah ini
// Function mandi
function mandi() {
    console.log("Mandi");
  }
  
  // Function sarapan dengan callback
  function sarapan(callback) {
    setTimeout(function() {
      console.log("Sarapan tertunda 3 detik");
      callback();
    }, 3000);
  }
  
  // Function berangkatSekolah
  function berangkatSekolah() {
    console.log("Berangkat Sekolah");
  }
  
  // Memanggil ketiga function dengan urutan mandi, sarapan, dan berangkatSekolah
  mandi();
  sarapan(berangkatSekolah);
  latihan 
  
  // Buat kode kamu di bawah ini
function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => console.log(users));
  }
  
  ambilDataUser();