document.getElementById('p').innerHTML = "Learn JS"
document.getElementById('p').className = "JS"
document.getElementById('p').style.color = "red"
document.getElementById('p').style.fontSize = "50px"


document.write(Date())

// Variable
var x = 10
var y = 20

x = 50
console.log("Nilai X : ", x)

let z = x + y
console.log("Nilai Z :", z)

const i = 20


// Operator aritmatika
var numOne = 10
var numTwo = 2;

var addition = numOne + numTwo
console.log("Addition", addition)

var Subtraction = numOne - numTwo
console.log("Subtraction", Subtraction)

var Multi = numOne * numTwo
console.log("Multi", Multi)

var Division = numOne / numTwo
console.log("Division", Division)

var Decrement = numOne--
console.log("Decrement", Decrement)

var Increment = numOne++
console.log("Increment", Increment)


// Operator Assigment
var numThree = 20
var numFour = 10

console.log("Assigmnet", numThree = numFour)
console.log("Assigmnet", numThree += numFour)
console.log("Assigmnet", numThree -= numFour)    
console.log("Assigmnet", numThree *= numFour)    
console.log("Assigmnet", numThree /= numFour)    
console.log("Assigmnet", numThree %= numFour)    

// Operator String

// With Aritmatika
var txt1 = "Marry"
var txt2 = "Doe"
var txt3 = txt1 + " " + txt2
console.log("String One : ", txt3)

// With Assign
var txt4 = "What a very"
txt4 += " nice day"
console.log("String Two : ", txt4)

console.log("This value of numThree " + numThree)


// Operator Comparison
const num1 = "2"
let num2 = 2

console.log(num1 == num2)
console.log(num1 === num2)
console.log(num1 != num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 >= num2)

num1 === "2" ? console.log("True !!") : console.log("False !!")

// Operator Logical
num1 === num2 && num1 === "2" ? console.log("True !!") : console.log("False !!")
num1 === "2" || num1 === 3 ? console.log("True !!") : console.log("False !!")
num1 === "2"|| num1 != 3 ? console.log("True !!") : console.log("False !!")

// Type OF
console.log(typeof num1)

// Intance Of
const obj = {name : "John", age : 20}
console.log(obj instanceof Object)

// Template Litreal
const TemplateLiteral = `John ${num2}`
console.log(TemplateLiteral)

// Function

// Without Parameter
function myFunction(){
    console.log("THis is a function")
}

// With parameter
function calculate(numOne, numTwo){
    console.log(numOne + numTwo)
    
}

// Return Value
function calculateTwo(numOne, numTwo){
    return numOne + numTwo
}


function myFunctionTwo(){
    console.log(calculateTwo(100, 20))
}

myFunction()
calculate(10, 20)
myFunctionTwo()

// Object 
const person = {
    name : "ALex",
    age : 20,
    weight : 60,
    detail : function(){
        console.log(`Name : ${this.name}, Age : ${this.age}, Weight : ${this.weight}`)
    }
}

person.detail()

// Array
const cars = ["BMW", "VOLVO", "TESLA"]
console.log(cars)

const persons = [
    {
        name : "ALex",
        age : 20,
        weight : 60,
    },
    {
        name : "John",
        age : 18,
        weight : 70,
    }
]
console.log(persons)
console.log(persons[0])






