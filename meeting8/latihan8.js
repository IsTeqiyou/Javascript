class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode kamu di bawah ini
  class Pelajar extends Orang {cd
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
  
  /**
   * Method untuk mengembalikan string yang berisi nama pelajar 
   * dan nama sekolah tempat pelajar tersebut belajar
   * @return {string} - string yang berisi nama pelajar dan nama sekolah
   */
  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;  
  }
  }
  
  let user = new Pelajar("Terra", 17, "Skilvul") 
  console.log(user)

  // harimau //
  // Buat kode kamu di bawah ini
class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }

  // Overriding
  makan() {
    return `${this.nama} makan daging`
  }
}
  
  let harimauSumatra = new Harimau("Harimau Sumatra")
  console.log(harimauSumatra.makan())

  // soal 1 //
  class Car extends Vehicle {

    constructor(model, brand) {
        super  (brand)
        this.model = model;
    }
    
    start() { t
        return `${this.model} is brand to ${this.brand}`
        
    }
  }

  let avanza = new Car("Avanza", "Honda")
  console.log(avanza.start());
  
// super ama extend
  // Praktek 2

  class Shape {
    draw() {
        return "Drawing shape"
    }
  }


  class Rectangle extends Shape {
    draw() {
       return "Drawing rectangle"
    }
  }

  let shape = new Rectangle();
  console.log(shape.draw());

  // Praktek 3

  class Person {
    constructor(name) {
        this.nama = name;
    }

    introduce() {
        return "hi my name is"
    }
  }
  
  class Employee extends Person {
    constructor(name, position) {
        super (name)
        this.position = position;
    }
    introduce() {
        return "hi my name is taqi and i am an student"
    }
  }

  class Manager extends Employee {
    introduce() {
        return "hi my name is taqi and i am an student and i manage a team"
    }
  }

  let personal = new Person("Taqi");
  console.log(personal.introduce())

  let personal2 = new Employee("Student");
  console.log(personal2.introduce())

  let personal3 = new Manager();
  console.log(personal3.introduce())


