
import './style/hw-3.css';
import './style/hw15.css';
import './style/style.css';
import { formatName } from './functions/hw3';
import { students as Array, GetPairs } from './functions/hw5';
import { ukraine as country, getMyTaxes } from './functions/hw9';
import { Student } from './functions/hw10';
import { UP, DOWN, TEXT, fontGenerator } from './functions/hw15';
import CursorImg from './assets/logo.png';
const container = document.querySelector('.container');
document.querySelector('.button').addEventListener('click', () => {
   let name = document.getElementById('format_name').value;

   document.querySelector('.res-format-name').innerHTML = formatName(name);;
})

console.log(fontGenerator.next().value);
UP.addEventListener('click', () => fontGenerator.next('up'))
DOWN.addEventListener('click', () => fontGenerator.next('down'))

const innerImg = document.createElement('img')
innerImg.setAttribute('src', CursorImg)
container.before(innerImg);
const yaroslav = new Student('LNU', 3, "Yaroslav Patsalon");
console.log("HW 5: ", GetPairs(Array));
console.log("HW 9: ", getMyTaxes.call(country, 10_000));
console.log(yaroslav.getInfo)
