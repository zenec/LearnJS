'use strict'
let money = prompt("Введите ваш бюджет на месяц", ""),
    day = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    bank: money,
    timeDate: day,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
//выводим на экран пользователя бюджет на один день
alert( appData.bank / 30 );