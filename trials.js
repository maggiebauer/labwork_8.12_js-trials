// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];


const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309')
phoneNumbers.set('mobile', '415-555-1212')
phoneNumbers.set('business', '415-123-4567')


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function displayBusinessName(accountHolderName, accountHolderNumber, accountBusinessName)  {
	console.log(`Account Holder Name: ${accountHolderName}`);
	console.log(`Account Holder Number: ${accountHolderNumber}`);
	console.log(`Business Name: ${accountBusinessName}`);
// 	console.log(`Account Holder Name: ${accountHolderName}
// Account Holder Number: ${accountHolderNumber}
// Business Name: ${accountBusinessName}`);
}

displayBusinessName(accountHolder, accountNumber, businessName)


// Add function to print all addresses, including a header

function displayAddresses(addressesArray)	{
	console.log(`Addresses:`);
	
	for (let i = 0; i < addressesArray.length; i += 1)	{
		console.log(`${addressesArray[i]}`);
	}
}

displayAddresses(addresses)


// Add function to print phone types and numbers

function displayPhoneNumbers(phoneNumbersMap)	{
	console.log(`Phone Numbers:`);
	
	for (let [phoneNumberType, typesNumber] of phoneNumbersMap)	{
		console.log(`${phoneNumberType}: ${typesNumber}`);
	}
}

displayPhoneNumbers(phoneNumbers)


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map()


// Add function to add transactions

function addTransaction(date, amount)	{
	transactions.set(date, amount);
}

// Use the function to add transactions

addTransaction('May-2', -500)
addTransaction('May-13', 1200)
addTransaction('May-15', -100)
addTransaction('May-21', -359)


// Add function to show balance status

function showBalanceStatus(balance)	{
	console.log(`Current Balance: ${balance}`);

	if (balance < 0)	{
		console.log(`YOU ARE OVERDRAWN`);
}	else if (balance < 20)	{
		console.log(`Warning: You are close to zero balance`);
}	else	{
		console.log(`Thank you for your business.`)
}
}

// showBalanceStatus(-20)
// showBalanceStatus(15)
// showBalanceStatus(25)

// Add function to show transactions

function showTransactions(transactionsMap, startingBalance)	{
	console.log('Starting Balance: ${startingBalance}');

	for (let [date, amount] of transactionsMap)	{
		if (amount > 0) {
		console.log(`Transaction Date: ${date}
Transaction Type: Deposit
Amount: ${amount}
New Balance: ${startingBalance + amount}`);

}		else {
console.log(`Transaction Date: ${date}
Transaction Type: Withdrawl
Amount: ${amount}
New Balance: ${startingBalance + amount}`);
	}
}	
}


showTransactions(transactions, 26000)

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




