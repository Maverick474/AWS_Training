// global variables

var name = 'zain';
var age = 23
var gender = 'male'

console.log('Hi i am ' + name + ' ' +  'my age is ' + age + ' ' + 'gender is' + ' ' + gender)

// function:

function add(a, b) {
    return (a + b);
}

console.log(add(1, 4))

// Es6

const name2 = 'haseeb'
let age2 = 23

const addTwo = (a, b) => {
    return (a + b)
}

console.log(addTwo(1, 3))

// Another way of writing an arrow functions

const num = () => 2;
console.log(num())

const sin = a => a + 1;

console.log(sin(2))


//objects 

const person = {
    name: 'Max',
    age: 23,
    greet: function() {
        console.log(`I am ${this.name} age is ${this.age}`)
    }
}

// for printing out a function from an object

person.greet();

//Another way of writing a function inside of the object

const person2 = {
    name: 'Maxxie',
    age: 22,
    greet() {
        console.log(`I am ${this.name} age is ${this.age}`)
    }
}

person2.greet();

//Arrays in js

const hobbies = ['sports', 'gaming']

/*
for (hobby of hobbies) {
    console.log(hobby)
}

*/
// mapping the hobbies

console.log(hobbies.map(hobby=>'Hobbies: ' + hobby))

console.log(hobbies)

//In order to make changes in constant array we use the push method 
//It is not violating the constant rule but pushing/making changes to what constant is pointing at
hobbies.push('Programming')
console.log(hobbies) // warning donot directly print the hobbies with push method as it will show the numbers


//Spread vs rest operator

//The spread operator is used to take out key-pair values from object
//The Rest operators is used to add arguments/variables in the array using a function

// Spread operator
const copyHobby = [...hobbies]
console.log(copyHobby)


// Rest operator
const funcArr = (...args) =>{
    return args
}

console.log(funcArr(1,2,3,4))

//Objects destructing 
/* 
There are two ways of object destructing 
1) call the object key value pairs by third party function
2) using array destructing

*/

const personR = {
    nameR: 'Max',
    ageR: 23,
    greet: function() {
        console.log(`I am ${this.name} age is ${this.age}`)
    }
}

const personData = ({nameR}) => { // Note we can put more than one variables in ( ) depending on the objects
    console.log(nameR)
}

personData(personR)

const {nameR, ageR} = personR
console.log(nameR, ageR)

//In object destructing we pull the variables values out by name