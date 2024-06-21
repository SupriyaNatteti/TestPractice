        // 1 . General function

// function printSomething()
// {
//     console.log("i am print something")
// }
// printSomething()



     // ! behaviours of function

   // * function without parameters and wothout return keyword

// function add()
// {
//     console.log(2+3)
// }
// add()

   // * function with parameters and wothout return keyword

// function add(a,b)
// {
//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }
// add(24,23)

    // * function without parameter and with return keyword

// function display(){
//     return "good afternoon"
// }
// console.log(display())

    // * function with parameters with return keyword

// function sub(a,b){
//     return a-b
// }
// console.log(sub(20,5))

   //! passing extra argument

// function interview(a,b){
//     console.log(a+b)
// }
// interview(10,20,30)

  //! passing extra parameters

// function interview(a,b,c){
//     console.log(a+b+c)
// }
// interview(10,20)


        // 2. FUNCTION EXPRESSION

  // 1 . anonymous function

// let a=function(){
//     console.log("i an anonymous function")
// }
// a()

   // ex 2

// let add=function(val1,val2){
//     return val1+val2
// }
// console.log(add(100,200))


   // 2. ARROW FUNCTION

// let arrow=()=>{
//         console.log("i am arrow function")
// }
// arrow()

     // * explicit return arrow function

// let variable=(a,b)=>{
//         return a+b
// }
// console.log(variable(10,20))

     // * implicit return arrow function

// let variable=(val1,val2)=>val1+val2
// console.log(variable(10,20))

      // * no parameter

// let some=_=>"hello"
// console.log(some())

      // * single parameter

// let something=a=>a
// console.log(something("Rahul"))


    // 3. IMMEDIATE INVOKED FUNCTION EXPRESSION
    
   // ex 1

// (function hello(){
//         console.log("normal function inside IIFE")
// })
// ()

   // ex 2

// (function(){
//         console.log("anonymous function inside IIFE")
// })
// ()

   // ex 3

// (()=>{
//         console.log("arrow function inside IIFE")
// })
// ()



       // 4 HIGHER ORDER FUNCTION


// let add=(a,b)=>{
//    return a+b
// }
// let sub=(a,b)=>{
//    return a-b
// }
// let mul=(a,b)=>{
//    return a*b
// }

// let calculator=(task,a,b)=>{
//    return task(a,b)
// }
// console.log(calculator(add,10,20))
// console.log(calculator(sub,10,20))
// console.log(calculator(mul,10,20))



