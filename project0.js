// 'use strict';

let startButton = document.getElementById('start'),
    bud = document.getElementsByClassName('budget-value')[0],
    daybud = document.getElementsByClassName('daybudget-value')[0],
    lvl = document.getElementsByClassName('level-value')[0],
    exp = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    inc = document.getElementsByClassName('income-value')[0],
    mnthSv = document.getElementsByClassName('monthsavings-value')[0],
    yearSv = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countButton = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countButton.disabled = true;

startButton.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money)  || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    bud.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countButton.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(var i = 0; i < expensesItem.length; i++) {    
        let itemExp = expensesItem[i].value,
            sumExp = expensesItem[++i].value;
    
        if ( (typeof(itemExp))=== 'string' && typeof(itemExp) != null && typeof(sumExp) != null 
            && itemExp != '' && sumExp != '' && itemExp.length < 50) {
                console.log("done");
            appData.expenses[itemExp] = sumExp;
            sum += +sumExp;
        } else {
            i--;
        }
    }
    exp.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i=0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] =  opt;
        optionalExpensesValue.textContent +=  appData.optionalExpenses[i] + ' ';
    }
});

countButton.addEventListener('click', function() {

    if(appData.budget != undefined) {
        
        appData.moneyPerDay = ((appData.budget - +exp.textContent) /  30).toFixed();
        daybud.textContent = appData.moneyPerDay;
        console.log(exp);
        if(appData.moneyPerDay < 100) {
            lvl.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            lvl.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000)  {
            lvl.textContent = "Высокий уровень достатка";
        } else {
            lvl.textContent = "Произошла ошибка";
        }
    } else {
        daybud.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    inc.textContent =appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings =  false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mnthSv.textContent = appData.monthIncome.toFixed(1);
        yearSv.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mnthSv.textContent = appData.monthIncome.toFixed(1);
        yearSv.textContent = appData.yearIncome.toFixed(1);     
    }
});

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses:{},
    income: [],
    savings: false
};



//aehruehguyegur
///erg89rj8rj89
//proverka