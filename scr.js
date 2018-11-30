'use strict'
let money = prompt("Введите ваш бюджет на месяц", ""),
    day = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    bank: money,
    timeDate: day,
    expenses: {
        expenditure: prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost: prompt("Во сколько обойдется?", "")
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};
//выводим на экран пользователя бюджет на один день
alert( appData.bank / 30 );