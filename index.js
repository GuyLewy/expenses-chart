const spending = JSON.parse(jsonSpending),
	bars = document.getElementsByClassName("bar"),
	barValues = document.getElementsByClassName("bar-value"),
	totalSpendingHeader = document.getElementById("total-spending");

let weekSpending = [],
	maxHeight,
	barHeight;

for (var i = 0; i < spending.length; i++) {
	window["spending" + spending[i].day] = spending[i].amount;
	weekSpending.push(spending[i].amount);
}

totalSpending = weekSpending.reduce((a, b) => a + b, 0);
totalSpendingHeader.innerHTML = `$${totalSpending}`;
maxSpending = weekSpending.sort()[weekSpending.length - 1];

for (var i = 0; i < spending.length; i++) {
	barHeight = 75 * (spending[i].amount / maxSpending);
	eval(`bars[${i}].style.height = "${barHeight}%"`);
}

for (var i = 0; i < barValues.length; i++) {
	barValues[i].innerHTML = `$${spending[i].amount}`;
}
