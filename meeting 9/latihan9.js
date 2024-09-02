class mobil {
    constructor(merek, tahun) {
      var _merek = merek;
      var _tahun = tahun;
  
      this.setMerek = function (merek) {
        _merek = merek;
      };
  
      this.setTahun = function (tahun) {
        _tahun = tahun;
      };
  
      this.getMerek = function () {
        return _merek;
      };
  
      this.getTahun = function  () {
        return _tahun;
      };
    }
    spek() {
      return `mobil ini bermerek ${this.getMerek()} dikeluarkan pada tahun ${this.getTahun()}`;
    }
  }
  
  let mobil1 = new mobil("honda", 2010);
  console.log(mobil1.spek());
  
// soal 2 //

class mobil2 extends mobil {
    constructor(merek, tahun, warna) {
      super(merek, tahun);
      var _warna = warna;
  
      this.setWarna = function (warna) {
        _warna = warna;
      };
  
      this.getWarna = function () {
        return _warna;
      };
    }
    spek() {
      return `mobil ini bermerek ${this.getMerek()} dikeluarkan pada tahun ${this.getTahun()} dengan warna ${this.getWarna()}`;
    }
  }
  
  let mobil2 = new mobil2("honda", 2010, "merah");
  console.log(mobil2.spek());