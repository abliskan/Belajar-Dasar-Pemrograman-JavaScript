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