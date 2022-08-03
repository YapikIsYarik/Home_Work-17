"use strict"

export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


let pairs = [];
export function GetPairs(students) {
   let sortStud = students.slice(0);
   //let sortStud = students.concat(); //робить те саме що і slice(0) але працює повільніше
   //міняю послідовність імен в масиві так шоб була послідовність хлопець,дівчина..
   sortStud.splice(1, 2, "Олена", "Ігор");
   for (let i = 0; i < sortStud.length / 2; i++) {
      pairs.push([sortStud[i * 2], sortStud[i * 2 + 1]]);
   }
   return pairs;
}
let pairsTheme = [];
function GetPairsTheme(pairs, themes) {
   for (let i = 0; i < students.length / 2; i++) {
      pairsTheme.push([pairs[i][0] + ' i ' + pairs[i][1], themes[i]])
   }
   return pairsTheme;
}
function GetPairsThemeMarks(pairs) {
   let pairsMark = [];
   for (let i = 0; i < students.length / 2; i++) {
      pairsMark.push([pairs[i][0] + ' i ' + pairs[i][1], themes[i], getRandom()]);
   }
   return pairsMark;
}
function getRandom() {
   return Math.round(Math.random() * (5 - 1) + 1);
}
function GetMarks(marks) {
   let studentMark = [];
   for (let i = 0; i < students.length; i++) {
      studentMark.push([students[i], marks[i]]);
   }
   return studentMark;
}
