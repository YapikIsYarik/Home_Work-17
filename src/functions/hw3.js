"use strict"
export function formatName(name) {
   if (name == "") {
      name = "яРОслаВ"
      document.getElementById('format_name').value = "яРОслаВ";
   }
   return name[0].toUpperCase() + name.toLowerCase().slice(1);
};
document.querySelector('.button').addEventListener('click', () => {
   const NUMBER = document.getElementById('number').value;
   function getMaxDigit(NUMBER) {
      let arr = ('' + NUMBER).split('')
      return Math.max.apply(null, arr);
   }


   const NUM = document.getElementById('number__two').value;
   const POW = document.getElementById('pow').value;
   function powNum(NUM, POW) {
      let powN = 1;
      for (let i = 0; i < Math.abs(POW); i++) {
         powN *= NUM;
      }
      if (POW < 0) {
         return 1 / powN;
      } else
         return powN;
   }

   let name = document.getElementById('format_name').value;
   formatName(name);

   const SALARY = document.getElementById('salary').value;
   const TAX = document.getElementById('tax').value;

   function taxes(SALARY, TAX) {
      return SALARY - (SALARY * parseInt(TAX) / 100);
   }

   const N = +document.getElementById('N').value;
   const M = +document.getElementById('M').value;
   function getRandomNumber(N, M) {
      return Math.round(Math.random() * (M - N) + N);

   }

   const WORD = document.getElementById('word').value;
   const LETTER = document.getElementById('letter').value;

   function countLetter(LETTER, WORD) {
      let count = 0;
      let arr = ("" + WORD.toLowerCase()).split("");
      arr.forEach(element => {
         if (element == LETTER) {
            count++;
         }
      })
      return count;
   }

   const CURRENCY = document.getElementById('value').value;
   function convertCurrency(CURRENCY) {
      if (CURRENCY.includes("UAH") || CURRENCY.includes("uah")) {
         return parseInt(CURRENCY) / 25 + "$";
      } else if (CURRENCY.includes("$")) {
         return parseInt(CURRENCY) * 25 + "UAN";
      } else {
         return "Unknown currency";
      }
   }

   const LENGTH = document.getElementById('randPassword').value;
   function getRandomPassword(LENGTH) {
      let rand = "";
      for (let i = 0; i < LENGTH; i++) {
         rand += Math.round(Math.random() * (0 - 9) + 9);
      }
      return rand;
   }
   const WORD_DELETE = document.getElementById('word__delete').value;
   const LETTER_DELETE = document.getElementById('letter__delete').value;
   function deleteLetters(LETTER_DELETE, WORD_DELETE) {
      let arr = ("" + WORD_DELETE).split("");
      arr.forEach(element => {
         if (element == LETTER_DELETE) {
            let index = arr.findIndex(i => i == LETTER_DELETE);
            delete arr[index];
         }
      })
      return arr.join("");
   }
   const WORD_PALY = document.getElementById('palyndrom').value;
   function isPalyndrom(WORD_PALY) {
      let str = WORD_PALY.split(" ").join("").toLowerCase();
      let reversStr = str.split("").reverse().join("");
      if (str === reversStr) {
         return "Слово паліндром"
      } else {
         return "Слово не є паліндромом"
      }
   }
   const STR = document.getElementById('duplicate').value;
   function deleteDuplicateLetter(STR) {
      let res = STR.toLowerCase().split(" ").join("");
      for (let i = 0; i < STR.length; i++) {
         if (countLetter(STR[i], STR) >= 2) {
            res = deleteLetters(STR[i], res);
         }
      }
      return res;
   }


})

