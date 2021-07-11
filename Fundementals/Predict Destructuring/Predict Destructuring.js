//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// console.log(randomCar) // it will log "Tesla"
// console.log(,otherRandomCar) // it will log "Mercedes"


//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//console.log(name);// syntax error, name is not defined.

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


// console.log(password); // it will log 12345
// console.log(hashedPassword);// it will log undefined because person doesnt have password


//4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// console.log(first== second) // it will log false
// console.log(firs== third)// it will log true.

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // it will log [1,5,1,8,3,3]
console.log(secondKey); // it will log 1
console.log(secondKey[0]); // it will log 5
console.log(willThisWork); // it will log nothing