//*******************************************************
// renderTransactions(transactions)
//   given a list of transactions, will generate an HTML
//   string representing the transactions
//*******************************************************
function renderTransactions(transactions) {
	var finalHTML = '<div class="buffer">TRANSACTIONS</div>';

	var transactionsHTML = transactions.map(function (transaction) {
		var transactionHTML = `
		<div class="transaction">
			<div class="name">${transaction.name}</div>
			<div class="for">${transaction.for}</div>
			<div class="date">${transaction.date}</div>
			<div class="amount">${transaction.amount}</div>
		</div>
		`
		return transactionHTML;
	});

	finalHTML += transactionsHTML.join('');

	return finalHTML;
}

//*******************************************************
//   Displays the full transaction list on page load
//   Listens for keyboard input to filter the list of 
//   transactions based on the search string. 
//*******************************************************
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById('transactions').innerHTML = renderTransactions(fullTransactionData);

	document.getElementById('search-input').addEventListener('input', function (e) {
		var searchString = e.target.value.toLowerCase();
		var filteredData = fullTransactionData.filter(function (transaction) {
			var foundInName = transaction.name.toLowerCase().indexOf(searchString) > -1;
			var foundInFor = transaction.for.toLowerCase().indexOf(searchString) > -1;
			var foundInDate = transaction.date.toLowerCase().indexOf(searchString) > -1;
			var foundInAmount = transaction.amount.toLowerCase().indexOf(searchString) > -1;
			return foundInName || foundInFor || foundInDate || foundInAmount;
		});

		document.getElementById('transactions').innerHTML = renderTransactions(filteredData);
	});

});