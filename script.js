let money = 1000;
let income = 300;
let addExpenses = "Интернет, пиТса, Коммуналка, Авианосец, Кокаинум"; 
let deposit = true; 
let mission = 3000000;
let period = 12;

console.log(money,income,deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period +  ' месяцев. Цель заработать ' + mission + ' евро');
console.log(addExpenses.toLowerCase() && addExpenses.split(', '));

let budgetDay = money/30;
console.log(budgetDay);