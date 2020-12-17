const calcType = document.querySelector('.calc-type'),
  calcSquare = document.querySelector('.calc-square'),
  calcDay = document.querySelector('.calc-day'),
  calcCount = document.querySelector('.calc-count'),
  totalValue = document.getElementById('total');

const countSum = (price = 100) => {
    let total = 0,
        countValue = 1,
        dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;
    if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value < 5 && calcDay.value) {
        dayValue *= 2;
    } else if (calcDay.value < 10 && calcDay.value) {
        dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
    }
    totalValue.textContent = total.toString();

};

export default countSum;