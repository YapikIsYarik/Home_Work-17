export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

export function getMyTaxes(salary) {
   return this.tax * salary;
}
function getMiddleTaxes() {
   return this.tax * this.middleSalary
}
function getTotalTaxes() {
   return this.tax * this.middleSalary * this.vacancies
}
function getMySalary(country) {
   const SALARY = Math.round(Math.random() * (2000 - 1500) + 1500)
   const TAXES = getMyTaxes.call(country, SALARY)
   setInterval(function () {
      console.log(
         {
            salary: SALARY,
            taxes: TAXES,
            profit: +(SALARY - TAXES).toFixed(2),
         }
      )
   }, 10_000)
}


