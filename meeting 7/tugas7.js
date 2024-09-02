// latihan 1

// nomer1
const person = {
    name: "Taqi",
    age: 15,
    address: {
        city: "pangkalpinang",
    },
};
console.log(person.address)

// nomer2
const obj = {
    key: "Taqi",
    umur: 15,
    alamat: {
        kota: "pangkalpinang",
    },
}; 
console.log(obj.key);
console.log(obj["key"])

obj.umur = obj.umur+5;
console.log(obj.umur);

// nomer3
delete obj.kota;    
console.log(obj.kota)

// latihan 2

// nomer1
const { name, age, } = person;
console.log(name, age,);

// nomer2
const { name:userName, age:userAge} = person;
console.log(userName, userAge)

// latihan 3

// nomer1
class book{
    constructor(tittle, author) {
        this.tittle = tittle;
        this.author = author;
    }
    getDetails() {
        return `This is ${this.tittle}, a ${this.author}.`;
    }   
} 