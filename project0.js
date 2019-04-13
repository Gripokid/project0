'use strist';
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    money, 
    timeDat: time, 
    expenses: {}, 
    optionalExpenses:{},
    income: [],
    savings: false
}
for(var i=0;i<2;i++) {    
    let itemExp = prompt("Введите обязательную статью расходов в этом месяце",''),
        sumExp = +prompt("Во сколько это вам обойдется?");
    appData.expenses[itemExp] = sumExp;
}
alert(money/30);