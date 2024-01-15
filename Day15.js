/******************************** endsWith ********************************/

// It is used to check whether a string is ending with a specified suffix or not.

// The output of endWith() method is a boolean value, means either it is true or false.

// Syntax

// console.log( "string".endsWith("the suffix") )


/******************************** Example 01 ********************************/

let a = "Ram Sharma"
console.log(a.endsWith("Sharma")) // The output is true


/******************************** Example 02 ********************************/

let firstName = "Ram"
let lastName = "Sharma"
let fullName = `${firstName} ${lastName}`

if (fullName.endsWith(lastName)) {
    console.log(`Your last name is ${lastName}`)
} else {
    console.log('Please write your last name');
}