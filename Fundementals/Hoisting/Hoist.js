

//1- 
// console.log(hello);
// var hello = 'world';


// var hello;
// console.log(hello); // logs undefined
// hello= 'world'; 




//2-

// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle = 'haystack';
// function test() {
//     var needle = 'magnet';
//     console.log(needle); // it logs magnet
// }
//test();



//3

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// var brendan = 'super cool';

// console.log(brendan); // it logs super cool 


//4-
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// var food = 'chicken';
// console.log(food); // it logs chicken ;
// eat();
// function eat(){
//     var food;
//     food = "half-chicken";
//     console.log(food); // it logs half-chicken
//     food="gone";
// }


//5-

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// var mean ;
// console.log(food); syntax error food is not defined it will kill the runtime



//6- 


// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);


// var genre ;
// console.log(genre); //it logs undefined
// genre = "disco";
//function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre); // it logs rock;
//     genre = "r&b" 
//     console.log(genre)// it logs r&b ;
// }
// rewind();
// console.log(genre);// it logs disco


//7-

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//  dojo = "san jose";
// console.log(dojo); // san jose;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo) // seattle ;
//     dojo = "burbank" ;
//     console.log(dojo) // burbank;
// }
// learn();
// console.log(dojo) // san jose 







//8-
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     var dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// console.log(makeDojo("Chicago",65));
// function makeDojo(name,students){
//     const dojo = {};
//     dojo.name = name ; // error asssignment to constant variable 
// }
