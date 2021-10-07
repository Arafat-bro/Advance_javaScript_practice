// //Higher Order Function with Callback Function

// const add = (a,b) => {
//     return a + b;
// }
// const subs = (a,b) => {
//     return a - b;
// }
// const multi = (a,b) => {
//     return a * b;
// }

// const calculator = (a,b,operation) => {   //heigher Order
//     return operation(a,b);
// }
// console.log(calculator(5, 2, multi));

// function1 = () =>{
//     setTimeout(() => {
//         console.log(`This is function no. 1`);
//     }, 
//     2000);
// }
// function2 = () => {
//     console.log(`This is function no. 2`);
//     function1();
//     console.log(`this is again function 2`);
// }
// function2();

//function currying

// function sum(num1) {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1, num2, num3);
//         }
//     }
// }
// sum(5)(3)(2);
// same as ->
let sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum(5)(3)(2);