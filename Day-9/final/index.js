/* Pt-1 Export & Import
const coffeeStock = require('./state');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);

/* output
Kopi berhasil dibuat!
*/

import stock from "./state.js";
import coffeeStock from './state.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
} 
displayStock(coffeeStock);