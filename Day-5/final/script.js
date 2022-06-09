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


// Last Log: Section 4 -> 4 Pilar OOP