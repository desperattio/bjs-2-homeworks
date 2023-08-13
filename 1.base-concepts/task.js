"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  // вычисляем дискриминант
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  // записываем в массив значения корней
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // преобразование процентной ставки в диапазон от 0 до 1
  percent /= 100;
  // расчет тела кредита (общая сумма минус первоначальный взнос), ежемесячного платежа и общей суммы к выплате
  let creditBody = amount - contribution;
  let percentPart = percent / 12;
  let monthlyPayment = creditBody  * (percentPart + (percentPart / ((Math.pow(1 + percentPart, countMonths) - 1))));
  let overallPayment = (monthlyPayment * countMonths).toFixed(2);
  return Number(overallPayment);
}