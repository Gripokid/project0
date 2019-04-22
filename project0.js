'use strict';

let startButton = document.getElementById('start'),
    bud = document.getElementsByClassName('budget-value'),
    daybud = document.getElementsByClassName('daybudget-value'),
    lvl = document.getElementsByClassName('level-value'),
    exp = document.getElementsByClassName('expenses-value'),
    optExp = document.getElementsByClassName('optionalexpenses-value'),
    inc = document.getElementsByClassName('income-value'),
    mnthSv = document.getElementsByClassName('monthsavings-value'),
    yearSv = document.getElementsByClassName('yearssavings-value'),
    inPut = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countButton = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

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
    savings: true,
    chooseExpenses: function() {
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
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000)  {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i=0; i<3; i++) {
            let itemExp = prompt("Статья необязательных расходов?",'');
            appData.optionalExpenses[i] =  itemExp;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнтелеьных доход? (Перечислите через запятую)', '');
        if ( (typeof(items)) === 'string' && typeof(items) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            appData.income.forEach (function (item, i) {
                alert('Способы доп. заработка: ' + (i+1) + '-' + item);
            });
        } else {
                appData.chooseIncome();
        }
    },

};
appData.chooseIncome();
for (let elem in appData) {
    console.log('наша программа включает в себя данные: ' + elem + ' - ' + appData[elem]);
}