//  Find biweekly pay after tax for Abdisa

// Input hourly rate
// store rate from input
const rate = prompt('What is your hourly rate? ')

// Input for hours
// store hours
const hours = prompt('How many hours do you work each day of this pay period ')

// input for tax
// store tax
// IE: 12.5 (percentage)
const tax = prompt('What is your tax rate (in percentage)? ')

// input for timeframe (days)
// store timeframe
const days = prompt('How many days are you working this pay period? ')

// find take home pay for mary within "timeframe":
    // store Pay = (hours * rate * days) - (hours*rate*days*(tax/100))

const pay = hours*rate*days 
const taxAmt = hours*rate*days*(tax/100)

alert("You made " + (pay - taxAmt) + " after a tax of " + taxAmt + ", being " + pay + " before taxes.")
