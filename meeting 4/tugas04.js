     //soal 1 mulai
var nilai = 57;
var kehadiran = 60;
var totalPertemuan = 100;
var lulus = (kehadiran / totalPertemuan) * 100;

if (nilai >= 85) {
  if (lulus >= 75) {
    console.log("Kategori A : Lulus");
  } else {
    console.log("Kategori A : Tidak Lulus");
  }
} else if (nilai >= 70) {
  if (lulus >= 75) {
    console.log("Kategori B : Lulus");
  } else {
    console.log("Kategori B : Tidak Lulus");
  }
} else if (nilai >= 50) {
  if (lulus >= 75) {
    console.log("Kategori C : Lulus");
  } else {
    console.log("Kategori C : Tidak Lulus");
  }
} else {
  console.log("Kategori - : Tidak Lulus");
}
//soal 1 selesai

//soal 2 mulai
var pendaftaran = false
var pembayaran = true

if (pendaftaran ===  true){
    if (pembayaran === true){
        console.log("Dapat mengikuti Kursus")
    } else {
      console.log("Tidak dapat mengikuti Kursus")
        
    }
} else   {
    console.log("Tidak dapat mengikuti Kursus")
}


//soal 2 selesai
