'use strist';
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses:{},
    income: [],
    savings: false
}
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


// let i = 0;
// while (i != 2) {
//     let itemExp = prompt("Введите обязательную статью расходов в этом месяце",''),
//     sumExp = +prompt("Во сколько это вам обойдется?");

// if ( (typeof(itemExp))=== 'string' && typeof(itemExp) != null && typeof(sumExp) != null 
//     && itemExp != '' && sumExp != '' && itemExp.length < 50) {
//         console.log("done");
//     appData.expenses[itemExp] = sumExp;
//     i++;
// } else {
// }
// };


// let i = 0;
// do {
//     let itemExp = prompt("Введите обязательную статью расходов в этом месяце",''),
//     sumExp = +prompt("Во сколько это вам обойдется?");

// if ( (typeof(itemExp))=== 'string' && typeof(itemExp) != null && typeof(sumExp) != null 
//     && itemExp != '' && sumExp != '' && itemExp.length < 50) {
//         console.log("done");
//     appData.expenses[itemExp] = sumExp;
//     i++;
// } else {
// }    
// }
// while (i != 2);


console.log(appData);
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000)  {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}