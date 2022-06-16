// --------- Dicoding 
// *************************** Section-1: Fundamental JavaScript
// 1. JS Permulaan
let js = "amazing"; // create new variable and insert value
console.log(40 + 8 + 23 - 10); // display output

var yourName // (1) declaration statement = instruksi untuk melakukan sebuah aksi tertentu. Aksi ini bisa termasuk membuat variabel, melakukan perulangan, pengecekan kondisi, dll
'Apa tuch?' // (2) expression = unit kode yang dapat dievaluasi menjadi suatu nilai.

// ---------
// 2. Variable
// deklarasi variable pada JS menggunakan let, var, const
// note: jangan menggunakan nama var yang termasuk dalam list reserved word
// Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.
// (3) assignment expression / '=' = Kode untuk menginisialisasikan nilai ke dalam sebuah variabel

// let 
// let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

// Const merupakan kependekan dari constant. 
// Artinya, kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya.
// Jika menginisialisasi kembali nilai variabel yang menggunakan const, kita akan mendapati eror “TypeError: Assignment to constant variable.”

// ---------
// 3. Data type = 
// a) undefined = Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai
let x;
console.log(typeof(x));

// b) number = Nilai dari tipe data number adalah angka.
let y = 17.25;
console.log(typeof(y))

// c) BigInt = tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup.
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

// d) Strings = string yang merupakan sebuah teks.
let Agreet = "Hello";
console.log(typeof(greet))

const question = '"What do you think of JavaScript?" I asked';
console.log(question);

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

let Bgreet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

// e) boolean = Boolean hanya memiliki dua nilai, yaitu true atau false.
const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

// f) null = Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel.
let someLaterData = null;
console.log(someLaterData);

// g) symbol = Symbol adalah tipe data baru yang dikenalkan pada ES6. 
// Tipe data Symbol digunakan untuk menunjukkan identifier yang unik.
const id = Symbol("id");
console.log(id);

// ---------
// 4. Operator
// a) Assignment Operator
let ab = 10;
let ba = 5
x += ba;
console.log(ab);

// '==' vs '==='
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// b) Comparison Operator
let ac = 10;
let ca = 12;

console.log(ac < ca);
console.log(ac > ca);

// c) Logical Operator
let ad = 10;
let da = 12;

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

// ---------
// 4. Conditional 
// if
const isRaining = true;
console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

// if...else...
let ax = 50;

if(ax > 70) {
    console.log(ax);
} else {
    console.log("Nilai kurang dari 70");
}

// if...else...elseif...
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

// conditional expressions
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// ---------
// 5. Switch Case Statement
let languages = "French";
let greetings = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

// ---------
// 6. Loop
// for loop
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// loop for array
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

// while, do...while
let g = 1;

while (g <= 100) {
    console.log(i);
    g++;
}

let h = 1;

do {
    console.log(h);
    h++;
} while (h <= 100);

// *************************** Section-2: Struktur Data
// 1. Object
// Kali ini kita akan berkenalan dengan tipe data object.
// Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.

const user = {};

// Object berisi pasangan key dan value yang juga dikenal dengan property.
// Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. 
// Value berisi nilai dengan tipe data apa pun termasuk objek lain.

const user1 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

// 2. Array = tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
// Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// untuk menambahkan data ke dalam array, kita bisa menggunakan metode push()
// push() = ini akan menambahkan data di akhir array.
const myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

// untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
const myArray3 = ["Orange", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array
// Metode unshift() digunakan untuk menambahkan elemen di awal array.
const myArray4 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

// Lalu bagaimana jika kita ingin menghapus data dari array? pakai metode delete
// delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
const myArray5 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

// Untuk menghapus elemen, gunakan metode splice()
const myArray6 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

// Spread operator = digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen.
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(allFavorites);
const allFavorites = [...favorites, ...others];

// Spread operator juga bisa digunakan untuk object literals. 
// Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

// 3. Destructuring Object & Array
// Literasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript.
// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
// Array
const foods = ['Pie', 'Cake', 'Honey']

const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]

console.log(myFood, yourFood, ourFood)

// JSON
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age 
console.log(firstName, lastName, age)

// 4. Destructuring Object
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
const profile2 = {
    firstName1: "John",
    lastName1: "Doe",
    age1: 18
}

const {firstName1, lastName1, age1} = profile2;
console.log(firstName, lastName, age);

// Destructuring Assignment
const profile3 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}

let firstName2 = "Dimas";
let age2 = 20;

// menginisialisasi nilai baru melalui destructuring object
({firstName2, age2} = profile3);

console.log(firstName2);
console.log(age2);

// Default Values
// Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.
const profile4 = {
    firstName3: "John",
    lastName3: "Doe",
    age3: 18
}

const {firstName3, age3, isMale = false} = profile4;

console.log(firstName3)
console.log(age3)
console.log(isMale)

// Assigning to Different Local Variable Names
//-> ES6 menyediakan sintaksis tambahan yang digunakan untuk menyeragamkan penamaan variabel lokal dengan properti object-nya
const profile5 = {
    firstName4: "John",
    lastName4: "Doe",
    age4: 18
}

const {firstName4: localFirstName, lastName4: localLastName, age4: localAge} = profile5;
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

// 5. Destructuring Array
// Destructuring array serupa dengan destructuring object. 
// Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood1, secondFood1, thirdFood1, fourthFood1] = favorites2;

console.log(firstFood1);
console.log(secondFood1);
console.log(thirdFood1);
console.log(fourthFood1);

const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const [, , thirdFood ] = favorites3;
console.log(thirdFood);

// Destructuring Assignment
const favorites4 = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood1 = "Ice Cream";
let herFood = "Noodles";

[myFood1, herFood] = favorites4;

console.log(myFood1);
console.log(herFood);
// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.
// ---
// menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.
let aa = 1;
let bb = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + aa);
console.log("Nilai b: " + bb);

[aa, bb] = [bb, aa]

console.log("Setelah swap");
console.log("Nilai a: " + aa);
console.log("Nilai b: " + bb);

// Default Values
// Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined.
const favorites5 = ["Seafood"];
const [myFood2, herFood1] = favorites5;

console.log(myFood2);
console.log(herFood1);

// 6. Map = tipe data yang menyimpan koleksi data dengan format key-value layaknya Object.
// Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

// 7. Set = kumpulan nilai (set of values)
// Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.
// Data di dalam Set juga bersifat unik dan tidak ada duplikasi.

const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
const numberSet1 = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

// Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
numberSet.delete(4);
console.log(numberSet1);

// 8. WeakMap & WeakSet
// WeakMap merupakan varian dari Map yang mendukung garbage collection. 
// -> Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.
// -> WeakMap tidak dapat dilihat secara langsung menggunakan console.log.
// Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program. 
// -> Garbage collection di JavaScript dilakukan secara otomatis.
/*
Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:
- Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
- WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
- WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
*/
let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)


// *************************** Section-3: Function
// 1. Declaring Function
// digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang.

// Fungsi dideklarasikan dengan keyword function dan nama fungsinya. 
// Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.
// Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan parameter.
// Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya.
// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
// Function dapat menghasilkan output atau mengembalikan sebuah nilai.
function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

// Expression Function
// Expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function.
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

// 2. Function Parameter
// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
// Kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter.
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// Rest Parameter
// Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
// Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

// 3. Arrow Function
// ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression.
// Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ).

// Regular function
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

// Arrow function
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName1 = (name) => {
    console.log(`Nama saya ${name}`)
}

// Apabila fungsi hanya memiliki satu parameter
const sayName2 = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

// jika kita sama sekali tidak membutuhkan parameter
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

// ketika body dari function hanya terdiri dari satu baris
const sayName3 = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

// const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

// Ketika sebuah fungsi perlu mengembalikan nilai
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// 4. Variable Scope
// Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”.
// Sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.
// global variable, dapat diakses pada parent() dan child()
const abc = 'abc'; 

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}
// Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. 
// Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision) terjadi.

// 5. Variable scope
// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
// Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

// Fungsi greet() tidak memiliki variabel lokal. 
// Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name.
// JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java.
// Sebuah fungsi atau variabel bisa diakses dari mana pun. 
// Kenapa kita membutuhkan private method? 
// Salah satunya adalah untuk membatasi akses ke fungsi atau variabel.
let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
let add1 = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}
let addCounter = add1();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

// *************************** Section-4: OOP
/* 
- beberapa hal terkait OOP, seperti:
+ Apa itu class?
+ Empat pilar OOP.
+ Penggunaan property & method.
+ Object Composition.
+ Contoh object/class bawaan dari JavaScript.

- Object Oriented Programming (OOP) adalah salah satu paradigma dengan pendekatan berbasis objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya.
- Atribut adalah variabel yang digunakan untuk menyimpan nilai
- Method adalah fungsi yang digunakan untuk menjalankan suatu proses.
*/
const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');

// 1. Class = menyediakan informasi tentang suatu object
// Object adalah instance dari sebuah class.
// Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek.
// Untuk penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.
// (a) Penulisan method menggunakan prototype, code:
// Prototype adalah properti internal yang akan selalu ada ketika sebuah objek dibuat.
// menggunakan prototype
// -> const mail1 = new Mail();
// mail.hasOwnProperty('sendMessage');
// hasilnya = false

// --------

// tanpa prototype
// const mail1 = new Mail();
// mail.hasOwnProperty('sendMessage');
// -> hasilnya = true

// (b) Penulisan method sebagai sebuah properti secara umum, code:
/* -> class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}

const mail1 = new Mail();
-> mail1.sendMessage('hallo', 'penerima@dicoding.com');

output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com

output:
pengirim@dicoding.com
you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
*/

// 2. Proeprty & Method
// Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive
/*  Dalam OOP sendiri, properti dibagi menjadi 2:
    - Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
    - External interface : method dan property yang dapat diakses di luar kelas itu sendiri.

    Di dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:
    - Public  : dapat diakses dari mana pun.
    - Private : hanya dapat diakses dari dalam kelas itu sendiri.
    - default : semua atribut yang didefinisikan adalah public.
*/
/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function Mail() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}

/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
this._contacts = []
// contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}

/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
// #contacts = [];
// contoh
class Mail {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}

// <-> Class Method = function atau method yang ada di dalam sebuah object
// Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan.
const mail1 = new Mail();
Mail.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya error:
TypeError: Mail.sendMessage is not a function
**/
// note: Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu

// <-> Static Method = function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class.
class Mail{
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
}
// note: Dari contoh di atas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu.
Mail.isValidPhone(089000000000) //true

// <-> Constructor =  sebuah method/function yang dijalankan pertama kali ketika object dibuat.
// Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah objek diinisiasi.
/*
// cara 1
class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}

// cara 2
function Mail(author) {
    this.from = author;
    console.log('is instantiated', author);
}

// Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:
    - Cara 1 
const mail1 = new Mail("emailku@dicoding.com");
    - Cara 2
const mail1 = new Mail(085000111222); // misalkan untuk SMS
const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email
*/

// 3. 4 Pilar OOP
// (a) Encapsulation = kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat.
// Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung.
class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

// (b) Abstraksi = sebuah objek hanya menunjukkan operasinya secara high-level.
// (c) Inheritance = Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama.
/* 
// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
class ChildClassName extends ParentClassName{}

// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
ChildClassName.prototype = new ParentClassName()

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
// my name dicoding, is Business
*/ 

// (c) Polymorphism = objek dapat memiliki bentuk atau implementasi yang berbeda-beda pada satu metode yang sama.

// 4. Overriding Method = teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class.
// <-> Overriding Constructor
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
}   
//pemanggilan
const wa1 = new WhatsApp(080111000222);

// <-> Overriding Method
class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}
const wa2 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);

// 5. Object Composition = prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class.
/*
Pada dasarnya konsep yang harus dilakukan adalah:

Memisahkan fungsi-fungsi umum yang biasa digunakan.
const yourGenericAction = params => ({
actionA: () => {  do action A },
actionB: () => {  do action B },  
});

Membuat Class seperti biasa.
const YourClassName = (paramA, paramB) => {
}

Kita dapat menyimpan atribut yang kita punya ke dalam sebuah object, biasanya seorang engineer menggunakan konstanta dengan nama self atau state untuk menampung attribute.
const YourClassName = (paramA, paramB) => {
const self = {
    paramA,
    paramB
};
}

Menambahkan perilaku (method/function) yang hanya ada pada kelas tersebut.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramA,
    paramB
  };
  
  const yourSpecificActions = self => ({
    specificActionA: {  do action A },
  });
}

Membuat kumpulan attribute, generic method, dan spesific method menjadi satu objek.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramA,
    paramB
  };
  
  const yourSpecificActions = self => ({
    specificActionA: {  do action A },
  });
  
  return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
}
*/
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
    const self = {
        from,
        message,
        store
};
  // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

  // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih

// 6. Built-in Class
// Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String.
// Sample - date
// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 

// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate1 = new Date(dateString); 

// #3 parameter dalam bentuk number, misal 87400000
const myDate2 = new Date(miliseconds); 

// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate3 = new Date(year,month,date,hour,minute,second,millisecond); 

// *************************** Section-5: FP
// Functional Programming = paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni.
// Penulisan kode dengan gaya imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
[ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// Penulisan kode dengan gaya deklaratif
const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark1 = names1.map((name) => `${name}!`);
console.log(newNamesWithExcMark1);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */

// Konsep-konsep dalam FP:
// <-> Pure Function = konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
// Non-pure function | Sample-1
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}
console.log(hitungLuasLingkaran(4)); // 50.24
PI = 5; // tidak sengaja nilai PI berubah
console.log(hitungLuasLingkaran(4)); // 80

// Pure function | Sample-1
const hitungLuasLingkaran1 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Non-pure function | Sample-2
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: 'Bobo'
};
const newPerson = createPersonWithAge(18, person);  

console.log({
    person,
    newPerson
});  
/*
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
}
*/

// Pure function | Sample-2
const createPersonWithAge1 = (age, person) => {
    return { ...person, age };
};  
const person1 = {
    name: 'Bobo'
};

const newPerson1 = createPersonWithAge1(18, person1);  
console.log({
    person,
    newPerson
});  
/*
   * Output:
   *  { 
   *    person: { name: 'Bobo' },
   *    newPerson: { name: 'Bobo', age: 18 } 
*/

// <-> Immutability = sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
// Non-immutability
const user2 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user2) => {
    user.lastName = newLastName;
}
renameLastNameUser('Potter', user2);
console.log(user2);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Imutability
const user3 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Rekursif =  teknik pada sebuah function yang memanggil dirinya sendiri.
// Bentuk general
const countDown = start => {
    do {
        console.log(start);
        start -=1;
    }
    while(start > 0);
};
countDown(10);

// Bentuk rekursif
const countDown1 = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};  
countDown(10);

// <-> Higher-Order Function
// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data.
const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}  
const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();
/*
Output:
   * Hello!
   * Hello!
   * Hello!
------------
Teknik Higher-Order Function biasanya digunakan untuk:
+ Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
Membuat utilities yang dapat digunakan di berbagai tipe data.
Membuat teknik currying atau function composition.
*/
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopTrough(arr, action);
}

// 2. Reusable function
// <-> Array map = merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan.
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);

/*
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
*/


// <-> Array Reduce = fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
console.log(totalScore);
  
/*
   * output:
   * 313
   * 
*/

// <-> Array some = fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.
arr.some(callback(element, [index], [array]), [thisArg])
// [...] adalah opsional parameter
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);

/*
output true
**/

// <-> Array find = mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 
//  find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.
const students1 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = students1.find(student => student.name === 'James');
  console.log(findJames);

// <-> Array every =  fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan.
// ouput yang dihasilkan berupa boolean value
const scores1 = [70,85,90];
const minimumScore1 = 65;

const examPassed1 = scores1.every(score => score >= minimumScore);
console.log(examPassed1);


// <-> Array forEach = memanggil fungsi callback pada setiap iterasi index array.
// Cara imperatif
const names3 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names3.length; i++) {
    console.log(`Hello, ${names3[i]}!`);
}

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */

// Cara deklaratif
// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). 
// Hal ini juga berlaku ketika pada fungsi map dan filter.
const names4 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names.forEach((name4) => {
    console.log(`Hello, ${name4}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */

// *************************** Section-6: Setup Environment

// *************************** Section-7: Module
// 1. Export & import
// Dalam environment Node.js, gunakan perintah module.exports untuk melakukan proses export module. 
// Setiap berkas JavaScript yang berjalan pada Node, memiliki objek module lokal yang memiliki properti exports digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas tersebut.

// 2. ES6 Module
//  Node.js, kita gunakan keyword import ketika mendeklarasikan variabel yang di-import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas JavaScript-nya.

// *************************** Section-8: Error handling
// 1. Try and catch 
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}

/* output
Awal blok try
Terjadi error!
*/
// Di sana catch memiliki satu parameter bernama error (nama variabel bisa diubah). 
// Variabel error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.
/*
Object error memiliki beberapa properti utama di dalamnya, yaitu:
+ name : Nama error yang terjadi.
+ message : Pesan tentang detail error.
+ stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
*/

// <-> Reference error example
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

// <-> Try-catch-finally
// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}

/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/

// 2. Throwing errors
let json = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. 
// Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.

// Error-1= bad object
let json1 = '{ "age": 20 }';

try {
    let user = JSON.parse(json1);

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// Error-2= variabel yang belum terdefinisi
let json2 = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
*/
// instanceOf method = mendapatkan tipe dari eror yang terjadi.
try {
    // ...
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

// 3. Custom Error
// Kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai.
// Kelas ini merupakan turunan dari kelas Error yang sudah ada.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Kelas ValidationError memiliki parameter constructor berupa message
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json3 = '{ "age": 30 }';

try {
    let user = JSON.parse(json3);

    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

/* output
Invalid data: 'name' is required.
*/

// *************************** Section-9: Concurrency
// 1. Synchronous vs Asychronous
// Dalam synchronous program, kode dijalankan secara berurutan dari atas ke bawah.
// Jika kita menuliskan dua baris kode, maka baris kode kedua tidak bisa dieksekusi sebelum kode baris pertama selesai.

// Dalam asynchronous program, jika kita menuliskan dua baris kode, kita dapat membuat baris kode kedua dieksekusi tanpa harus menunggu kode pada baris pertama selesai dieksekusi.

// 1. setTimeout = cara yang paling mudah untuk membuat kode kita dijalankan secara asynchronous.
// Fungsi ini menerima dua buah parameter -> Parameter pertama adalah fungsi yang akan dijalankan secara asynchronous, kedua adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan.
// Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan callback function.
console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");

// 2. Callback function
/*
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}

const coffee = orderCoffee();
console.log(coffee);
*/

// Tambahkan parameter dengan nama callback pada fungsi asynchronous.
/*
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}


// kita panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan.
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
*/

// Gunakan fungsi orderCoffee, ubah kode dari:
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
orderCoffee(coffee => {
    console.log(coffee);
});
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/

// <-> Callback Hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain.
/*
Case: ntuk membuat kue tahapan yang perlu kita lakukan adalah:
+ Menyiapkan bahan
+ Membuat adonan
+ Memasukkan adonan ke cetakan
+ Memanggang adonan
*/

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

// Lantas apa solusi agar kita dapat menghindari callback hell? Salah satunya adalah dengan menggunakan Promise.
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}

// 3. Promise = menggantikan peran callback dengan menggunakan ciri khas fungsi .then-nya.
// Promise merupakan salah satu fitur penting dari ES6.
/*
Promise memiliki perilaku yang sama dengan analogi di atas. Promise memiliki tiga kondisi, yaitu:
+ Pending (Janji sedang dalam proses)
+ Fulfilled (Janji terpenuhi)
+ Rejected (Janji gagal terpenuhi)
*/

// 4. Constructing Promise Object
// Untuk membuat objek promise, kita gunakan keyword new diikuti dengan constructor dari Promise:
const coffee = new Promise();

// <-> executor function = Fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil. 
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/*
- Executor function memiliki dua parameter, yaitu resolve dan reject yang berupa fungsi. Berikut penjelasan detailnya:
+ resolve() adalah parameter pertama pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter. Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi fulfilled.
+ reject() adalah parameter kedua pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter dan digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi rejected.

- Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.

- Executor function mengeksekusi resolve() dengan membawa data string “Kopi berhasil dibuat”. Jika kita ubah nilai dari variabel isCoffeeMakerReady menjadi false, maka executor function akan mengeksekusi reject() dengan membawa pesan penolakan “Mesin kopi tidak bisa digunakan”.
*/

// 5. Consuming promises
// Seperti yang telah kita bahas sebelumnya, status awal dari Promise adalah pending. Kemudian, akan ada dua kemungkinan yang terjadi, fulfilled atau rejected.
// Untuk menangani hasil dari Promise, kita gunakan method .then().
// .then() sendiri adalah sebuah higher-order function yang membutuhkan dua parameter.
// Keduanya adalah callback function yang juga dikenal sebagai handler
// -> Handler pertama adalah fungsi yang akan dijalankan ketika Promise berstatus resolve. 
// -> Handler kedua adalah fungsi yang akan dijalankan ketika Promise berstatus reject.

const myPromise = new Promise(executorFunction);
myPromise.then(onFullfilled, onRejected);
/*
// Membuat object untuk menyimpan stok dan fungsi yang mengembalikan objek Promise.
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

// Kemudian di bawahnya kita tambahkan dua fungsi untuk menangani masing-masing status resolve dan reject.
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

//Terakhir panggil method .then() pada checkStock() untuk menangani hasil yang dikembalikan dari promise.
checkStock().then(handleSuccess, handleFailure)

note: 
+ checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
+ Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
+ Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
+ Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
*/
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);

// 6. onRejected with Catch Method
// Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns atau pemisahan masalah.
// memisahkan kedua logika tersebut menggunakan masing-masing method then() seperti ini:
checkStock()
.then(handleSuccess)
.then(null, handleFailure);
// Namun untuk menetapkan onRejected handler, kita perlu memberikan nilai null pada parameter pertama method .then().

// <-> .catch()
// Method ini const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};hanya menerima satu parameter function yang digunakan untuk rejected handler.
// Method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected.
checkStock()
.then(handleSuccess)
.catch(handleFailure);

// 7. Chaining promises
// Dengan promise kita dapat melakukan proses asynchronous secara berantai
// Untuk memastikan rangkaian promise berjalan dengan sesuai, kita perlu mengembalikan (return) promise selanjutnya.
/*
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
        });
}

makeEspresso();
*/
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();
/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Membuatkan kopi Anda...
Kopi sudah siap!
*/

// 8. Promise all
// Lalu bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa memedulikan urutan? 
// Bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?
// Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya.
// Promise.all () = akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.
const promises = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });

/* output
[ 'first promise', 'second promise', 'third promise' ]
*/
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    })
}

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then(value => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];
            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();

/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Memanaskan air...
Menggiling biji kopi...
[ 'Air panas sudah siap!', 'Kopi sudah siap!' ]
Membuatkan kopi Anda...
Kopi sudah siap!
*/
// note: Ketika kode di atas dieksekusi, kita perlu menunggu dua (2) detik untuk proses boilWater dan grindCoffeeBeans (durasi terlama dari promise yang dijalankan dari Promise.all()).

// 9. Async-await
// Promise example
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
makeCoffee();

// Callback example
function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
}

makeCoffee();
// Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JavaScript.
// Async/await ini tidak dapat digunakan jika tidak ada Promise dan generator.
// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous.
// keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.
async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}

makeCoffee();

// <-> Handle onRejected using async-await
// Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled).
// Lantas bagaimana jika promise gagal dilakukan (onRejected)? Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeCoffee();

// <-> Chaining Promise using async-await
// Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? 
// Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();

/* output
Membuatkan kopi Anda...
Kopi sudah siap!
*/
// *************************** Section-10: Node Package Manager (NPM)
// 1. NPM Intro
// Package manager merupakan tools yang dapat membantu pengelolaan package pada proyek agar lebih mudah. Kita dapat dengan mudah memasang dan menghapus package yang dibuat oleh orang lain pada proyek kita.
// Kita juga dapat menulis module/package untuk dikonsumsi secara publik.
// NPM adalah salah satu package manager yang banyak digunakan oleh JavaScript developer dalam mengelola package, selain NPM ada juga Yarn Package Manager.
// Keduanya, baik yarn atau npm, merupakan package manager yang dapat membantu kita dalam mengembangkan aplikasi web atau node.
// Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/.

// Lalu gunakan -h jika kita ingin melihat panduan penggunaan salah satu perintahnya.
// npm install -h
// Itu berarti perintah install dapat kita tuliskan dengan i, ins, isntal, add, atau yang lainnya.
/*
npm install
npm i
npm in
npm ins
npm isntal
npm add
// semua perintah di atas memiliki fungsi yang sama
*/

// 2. Intall packages
// Anda dapat membuat project baru atau menggunakan project node yang telah dibuat sebelumnya. 
// Pastikan di dalam folder project terdapat berkas package.json, jika belum, jalankan perintah npm init pada project Anda.
// Sebelum mulai menginstal package, kita perlu tahu terlebih dulu bahwa ada dua jenis instalasi package, yaitu local install dan global install.
// Local package akan dipasang di dalam direktori atau folder yang sama dengan project kita. Package ini akan diletakkan di dalam folder node_modules.
// Sementara global package dipasang di satu tempat pada sistem perangkat kita (tergantung pengaturan pada saat instalasi node/npm).
// Untuk menginstal package secara lokal caranya sama seperti yang telah kita bahas sebelumnya, yaitu dengan perintah npm install.
// npm install <package-name>

/*
Beberapa contoh package yang perlu diinstal secara global, antara lain:
+ npm
+ nodemon
+ mocha

Untuk menginstal package secara global, kita cukup menambahkan parameter -g pada perintah npm install. Di mana -g berarti global.
npm install -g <package-name>
*/

// Sebagai contoh, kita akan menggunakan package lodash.
// Lodash adalah package yang berisi banyak utilitas untuk memudahkan kita dalam menulis kode JavaScript, khususnya yang berhubungan dengan array, object, string, dll.
/* Sebenarnya terdapat dua tipe object dependencies dalam berkas package.json. Yang pertama object dependencies dan yang kedua object devDependencies.
- Objek dependencies merupakan objek yang menampung package yang kita gunakan untuk membuat aplikasi.
- Objek devDependencies digunakan untuk package yang berkaitan hanya saat proses pengembangan aplikasi
*/
// Untuk memasang package sebagai devDependencies, kita bisa menambahkan parameter --save-dev pada perintah npm install.
// npm install <package-name> --save-dev

// 3. Using package
// Package yang kita tambahkan ke dalam project sebenarnya adalah module. 
// Itulah kenapa di dalam project kita akan muncul juga folder node_modules.
// Karena merupakan module, kita bisa menambahkan kode dari package menggunakan keyword import seperti yang telah dipelajari pada materi Module.
// import variableName from 'package-name';
// Untuk menggunakan kode dari package lodash yang telah kita pasang, tambahkan kode berikut pada berkas index.js:
// import _ from 'lodash';
import _ from 'lodash';

const myArray7 = [1, 2, 3, 4];
let sum = myArray7.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

// 4. Uninstall package
import _ from 'lodash';

const myArray8 = [1, 2, 3, 4];
let sum = myArray8.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

/* output
10
*/

/* output
10
*/

// Last log: Section 10 -> Uninstall package