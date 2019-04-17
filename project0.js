'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money)  || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses:{},
    income: [],
    savings: true
}

function chooseExpenses() {
    for(var i=0;i<2;i++) {    
        let itemExp = prompt("Введите обязательную статью расходов в этом месяце",''),
            sumExp = +prompt("Во сколько это вам обойдется?");
    
        if ( (typeof(itemExp))=== 'string' && typeof(itemExp) != null && typeof(sumExp) != null 
            && itemExp != '' && sumExp != '' && itemExp.length < 50) {
                console.log("done");
            appData.expenses[itemExp] = sumExp;
        } else {
            i--;
        }
    };
    
}
chooseExpenses();

console.log(appData);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000)  {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

var i;
function chooseOptExpenses() {
    for(i=0; i<3; i++) {
        let itemExp = prompt("Статья необязательных расходов?",'');
        appData.optionalExpenses[i] =  itemExp;
    }
}
chooseOptExpenses();