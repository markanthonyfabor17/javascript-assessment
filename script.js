console.log("connected");

// Coding Exam
//1. Person Details
console.log("Hello World!");

const firstName = "John";
const lastName = "Smith";
const age = 30;
const hobbies = ['Biking', ' Mountain Climbing', ' Swimming'];
const city = "Lincoln";
const houseNumber = 32;
const state = "Nebraska";
const street = "Washington";

console.log(`First Name: ${firstName} \n\
Last Name: ${lastName} \n\
Age: ${age} \n\
Hobbies: ${hobbies} \n\
Work Address: \n\
city: ${city} \n\
house Number ${houseNumber} \n\
state: ${state} \n\
street: ${street}
`);

function userInformation() {
    console.log(`${firstName} ${lastName} is ${age} years of age`);

}
userInformation();

function hisHobbies() {
    const hobbies = [];
    hobbies.push("eating", "sleeping", "bingewatching");
    console.log(`His hobbies are: ${hobbies}`)
}
hisHobbies();

function hisAddress() {
    console.log(`city: ${city} \n\
house Number ${houseNumber} \n\
state: ${state} \n\
street: ${street}`)
}
hisAddress();

function hisRelationship() {
    const isMarried = true;
    console.log(`The value of isMarried is: \n\
${isMarried}`)
}
hisRelationship();

// let number = 0;
// for (let i = 20; i >= number; i++) {
//     for (let j = 20; i >= number; j--) {
//         console.log(i, j);
//     }
// }

// let giveNumber = prompt('Give me a number');

// if (giveNumber < 50) {
//     console.log('Currently at number 20. Terminating the loop');
// }

// else if (giveNumber <= 10) {
//     console.log('The number is divisible by 10. Skipping the number');
// }
// else {
//     console.log(giveNumber);
// }



