const money = 1000;
const income = 300;
const addExpenses = "Интернет, пиТса, Коммуналка, Авианосец, Кокаинум"; 
let addexpenses;
const deposit = true; 
const mission = 3000000;
const period = 12;

console.log(money,income,deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period +  ' месяцев. Цель заработать ' + mission + ' евро');
addexpenses=addExpenses.toLowerCase();
console.log(addexpenses.split(', '));

const budgetDay = money/30;
console.log(budgetDay);