// --------- Dicoding 
// Section-1: Fundamental JavaScript
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

// Section-2: Struktur Data
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

// Last Log: Section 2 -> Map