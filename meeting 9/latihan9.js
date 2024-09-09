// skilvul//
class Pelajar {
  constructor(nama, sekolah) {
    this._nama = nama;
    this._sekolah = sekolah;
  }

  setNama(nama) {
    this._nama = nama;
  }

  setSekolah(sekolah) {
    this._sekolah = sekolah;
  }

  getNama() {
    return this._nama;
  }

  getSekolah() {
    return this._sekolah;
  }
}

Pelajar.prototype.belajar = function() {
  return `${this.getNama()} belajar di ${this.getSekolah()}`;
}

const pelajar = new Pelajar("Alpha", "Skilvul");
console.log(pelajar.belajar());
//skilvul//
// Buat kode kamu di bawah ini
class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    let hasil = this.panjang * this.lebar;
    return hasil;
  }

  keliling() {
    let hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

const persegiPanjang = new PersegiPanjang(4, 3);
console.log("Luas: " + persegiPanjang.luas());
console.log("Keliling: " + persegiPanjang.keliling());
// soal 1 //
class Mobil {
  constructor(merk, tahun) {
    this._merk = merk;
    this._tahun = tahun;
  }

  get merk() {
    return this._merk;
  }

  set merk(merk) {
    this._merk = merk;
  }

  get tahun() {
    return this._tahun;
  }

  set tahun(tahun) {
    this._tahun = tahun;
  }
}

// Buat instance dari kelas Mobil
const mobil = new Mobil("Toyota", 2015);

// Uji metode getter
console.log("Merk: " + mobil.merk);
console.log("Tahun: " + mobil.tahun);

// Uji metode setter
mobil.merk = "Honda";
mobil.tahun = 2020;

console.log("Merk: " + mobil.merk);
console.log("Tahun: " + mobil.tahun);
// soal 2 //
class Pesawat {
  constructor(jenis, kecepatan) {
    this._jenis = jenis;
    this._kecepatan = kecepatan;
  }

  terbang() {
    console.log(`Pesawat ${this._jenis} sedang terbang dengan kecepatan ${this._kecepatan} km/jam.`);
  }
}

class Jet extends Pesawat {
  constructor(jenis, kecepatan, kapasitasBahanBakar) {
    super(jenis, kecepatan);
    this._kapasitasBahanBakar = kapasitasBahanBakar;
  }

  isiBahanBakar() {
    console.log(`Bahan bakar jet telah diisi hingga kapasitas ${this._kapasitasBahanBakar} liter.`);
  }
}

// Buat instance dari kelas Jet
const jet = new Jet("Boeing 737", 800, 20000);

// Uji metode terbang()
jet.terbang();

// Uji metode isiBahanBakar()
jet.isiBahanBakar();
// soal 3 //
// Kelas Karyawan
class Karyawan {
  constructor(nama, gaji, jabatan) {
    this._nama = nama;
    this._gaji = gaji;
    this._jabatan = jabatan;
  }

  // Getter
  get nama() {
    return this._nama;
  }

  get gaji() {
    return this._gaji;
  }

  get jabatan() {
    return this._jabatan;
  }

  // Setter
  set nama(nama) {
    this._nama = nama;
  }

  set gaji(gaji) {
    this._gaji = gaji;
  }

  set jabatan(jabatan) {
    this._jabatan = jabatan;
  }
}

// Kelas Manajer yang mewarisi dari Karyawan
class Manajer extends Karyawan {
  constructor(nama, gaji, jabatan) {
    super(nama, gaji, jabatan);
  }

  // Metode beriTunjangan()
  beriTunjangan(tunjangan) {
    this.gaji += tunjangan;
    console.log(`Tunjangan sebesar ${tunjangan} telah diberikan.`);
  }
}

// Buat instance dari kelas Manajer
const manajer = new Manajer("John Doe", 5000000, "Manajer");

// Uji semua metode
console.log(`Nama: ${manajer.nama}`);
console.log(`Gaji: ${manajer.gaji}`);
console.log(`Jabatan: ${manajer.jabatan}`);

manajer.beriTunjangan(1000000);
console.log(`Gaji setelah tunjangan: ${manajer.gaji}`);
// soal 4 //
// Kelas Kendaraan
class Kendaraan {
  constructor() {
    this._kecepatan = 0;
  }

  // Metode getter getKecepatan()
  getKecepatan() {
    return this._kecepatan;
  }

  // Metode setter setKecepatan(value)
  setKecepatan(value) {
    if (value < 0) {
      console.log("Kecepatan tidak dapat diatur di bawah 0.");
    } else {
      this._kecepatan = value;
    }
  }
}

// Buat instance dari kelas Kendaraan
const kendaraan = new Kendaraan();

// Set kecepatan ke 100
kendaraan.setKecepatan(100);
console.log(`Kecepatan: ${kendaraan.getKecepatan()}`);

// Coba set kecepatan ke -50
kendaraan.setKecepatan(-50);
console.log(`Kecepatan: ${kendaraan.getKecepatan()}`);
// soal 5 //
// Kelas AkunBank
class AkunBank {
  constructor() {
    this._saldo = 0;
  }

  // Metode getter getSaldo()
  getSaldo() {
    return this._saldo;
  }

  // Metode setter setSaldo(value)
  setSaldo(value) {
    if (value < 0) {
      console.log("Saldo tidak dapat diatur kurang dari 0.");
    } else if (value > this._saldo) {
      this._saldo = value;
    } else {
      console.log("Saldo hanya dapat bertambah.");
    }
  }

  // Metode tambahSaldo(value)
  tambahSaldo(value) {
    if (value > 0) {
      this._saldo += value;
    } else {
      console.log("Nilai setoran harus lebih dari 0.");
    }
  }

  // Metode kurangSaldo(value)
  kurangSaldo(value) {
    console.log("Saldo hanya dapat bertambah, tidak dapat dikurangi.");
  }
}

// Buat instance dari kelas AkunBank
const akunBank = new AkunBank();

// Set saldo awal
akunBank.setSaldo(1000);
console.log(`Saldo awal: ${akunBank.getSaldo()}`);

// Coba tambahkan saldo
akunBank.tambahSaldo(500);
console.log(`Saldo setelah tambah: ${akunBank.getSaldo()}`);

// Coba kurangi saldo
akunBank.kurangSaldo(200);
console.log(`Saldo setelah kurang: ${akunBank.getSaldo()}`);
// soal 6 //
// Kelas Karyawan
class Karyawan {
  constructor(nama, gaji) {
    this._nama = nama;
    this._gaji = gaji;
  }

  // Getter untuk nama
  getNama() {
    return this._nama;
  }

  // Setter untuk nama
  setNama(nama) {
    this._nama = nama;
  }

  // Getter untuk gaji
  getGaji() {
    return this._gaji;
  }

  // Setter untuk gaji
  setGaji(gaji) {
    this._gaji = gaji;
  }
}

// Kelas Manajer yang mewarisi dari Karyawan
class Manajer extends Karyawan {
  constructor(nama, gaji) {
    super(nama, gaji);
    this._laporan = [];
  }

  // Metode untuk membuat laporan
  buatLaporan(laporan) {
    this._laporan.push(laporan);
  }

  // Metode untuk menampilkan laporan
  tampilkanLaporan() {
    return this._laporan;
  }
}

// Buat instance dari kelas Manajer
const manajer = new Manajer("John Doe", 1000000);

// Akses dan modifikasi data menggunakan getter dan setter
console.log(`Nama: ${manajer.getNama()}`);
console.log(`Gaji: ${manajer.getGaji()}`);

manajer.setNama("Jane Doe");
manajer.setGaji(12000000);

console.log(`Nama: ${manajer.getNama()}`);
console.log(`Gaji: ${manajer.getGaji()}`);

// Buat laporan
manajer.buatLaporan("Laporan keuangan bulan Januari");
manajer.buatLaporan("Laporan keuangan bulan Februari");

// Tampilkan laporan
console.log(manajer.tampilkanLaporan());