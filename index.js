
        //Var for variable. Legacy code. Since ES6 let, const
//replace it.

//Ex. let is variable. name is the variable identifier.
// Best practice use let.


//let name;
//console.log(name);
    //returns undefined


//Below we have declared a variable with let called name,
// and have set that to this value or string.


//let name = 'Corey';
//console.log(name);
        //returns Corey

//Variables can't be reserved keyword, should be meaningful, cannot start with
// number, can't contain a space or hyphen, are case-sensitive

// let firstName;
// let Firstname; both of these are different variable's due to case sensitive.

// Modern best practive is to declare each variable on a single line.
// Could do this
//let firstName = 'Corey', lastName = 'Locke';

//But this is the modern best practice.
// let firstName = 'Corey';
// let lastName = 'Locke';


        //Constants. Let values can be changed. const Values cannot change.

        // let interestRate = 0.3;
        // interestRate = 1;
        // console.log(interestRate);
                //returns 1

        //if we change let to const. Now interestRate will be constant.
        // const interestRate = 0.3;
        // interestRate = 1;
        // console.log(interestRate)
                //result error b/c line 46 is trying to reassign a constant.
        //const cannot be reassigned.


//Primitives/ Value types and Reference types- Values that can be assigned
// to a variable.
//Variable primitives and/or value types, and Variable Reference Types
//Primitives have strings, numbers, boolean, undefined, null,

// Here we have variable with let called name set to a value 'string''Corey'
// let name = 'Corey'; //string literal

//Declare a variable and set it to a number
        //let age = 43; //number literal

//declare a variable and set to a boolean;
        //let isApproved = true;  //boolean literal

//let firstName;
        // let firstName = 'undefined';
        //both would return error of undefined since firstName isn't defined.

        //use null when you want to clear the value of a number
//let selectedColor = null;


        // Dynamic typing: JS is dynamic not static. In dynamic language like JS.
        //the type of variable can change at runtime.
        //typeOf operator we can check type of variable since it can change.

        //Ex. Dynamic. let name = 'John';
        //typeOf name returns 'string'
        //name = 1; returns 1
        //typeOf name returns 'number'




        //Ex. Static. string name = 'John';


//**//clear the console by pressing control key and L key

        // let name = 'Corey';
        //let age = 43;
        //let isApproved = true;
        // let firstName = 'undefined';
        //let selectedColor = null;

        //typeOf name returns 'string'
        //typeOf age returns 'number'
        //age = 30.1 returns 30.1
        //typeOf age still a number. JS has one number language. No integers,
        // No floating point numbers like other languages. All numbers are of type
        //number.

        //typeOf isApproved returns 'boolean'

        // let firstName = 'undefined';
        //typeOf firstName returns 'undefined'. Undef is a type and value
        //since we set undefined as the value for firstName it returns a typeOf
        //undefined.

        //typeOf selectedColor returns 'object'; type of variable is object.



   //Objects: Part of Reference types includes object, array, function.

        //Object is JS like all programming languages is like an object in real
        //life. Ex. Person. A person has a name, age, address etc. These are
        //properties of a person. Same conecpt in JS. When dealing with multiple
        // related variables, we can put these variables inside object.

        //declare a person object.

//let name = 'Mosh';
//let age = 30;

        //Curly braces are object literal
        //between curly braces{} add one or more key value pairs. The keys are
        //called the properties of this object. In this case a person object has
        //two properties or keys, name and age.
        //Under person object in object literal name is the key then colon:
        //after we set the value to string 'Mosh' then comma, and another
        //key value pair. Add another key value pair at age 30
//
//result object {Name:'Mosh', age: 30}

        // //dot notation
         //person.name = 'John';
        //
        // console.log(person.name)
        // //result John
        //
        // //bracket notation
        //  person ['name'] = 'Mary'
        //  console.log(person.name); //result Mary

        // let selection = 'name';
        // person[selection] = 'Mary';
        //
        // console.log(person.name); //result Mary


//Arrays
        //declare a variable called selectedColors
        //square brackets array literal[]
        //initialize this with = and make value an empty array []

        //let selectedColors = [];

//can initialize this with a couple items like red, blue.
        //let selectedColors = ['red', 'blue'];
//let's log this on the console
        //console.log(selectedColors);
        //returns proto:array with 2 elements indexed 0:red 1:blue
        //use array index to access 0 for red and 1 for blue.

        //let selectedColors = ['red', 'blue'];
        //console.log(selectedColors[0]); //returns red

        //JS can also dynamically change array to make shorter or longer, add
        //values or subtract etc..

        //let selectedColors = ['red', 'blue'];
        //selectedColors[2] = 'green';
        //console.log(selectedColors); //result red, blue, green. objects in arrays
        //are dynamic.

        // let selectedColors = ['red', 'blue'];
        // selectedColors[2] = 1;
        // console.log(selectedColors); //result red, blue, 1

        //objects of the array and size are dynamic. technically an array is
        // an object. Like the person object earlier it has a bunch of key value
        //pairs you can access through dot notation.

        // let selectedColors = ['red', 'blue'];
        // selectedColors[2] = 1;
        // console.log(selectedColors.length);

        //An array is a data structure we use to represent a list of items.
        // The .length property. This property returns
        //a number of items or elements in an array. All kinds of operations can be
        //performed on arrays.

// Functions: Are one of the fundamental building blocks in JS. It's basically
        //a set of statements that performs a task or calulates a value.
//declare a function named 'greet. Then add parenthesis (), that's part of the
        //syntax for declaring functions. Then curly braces {}. Inside the curly
        //braces is referred to as the body of the function. This is where we add
        //all the statements to define some kind of logic in our application.
        //The logic for this function is to display this message on the console.
//This is a function declaration so no need to have semi colon after the curly
        //braces.
       // function greet() {
       //   console.log('Hello World');
        //}

        //Call the function like this.
        //greet();

//Functions can have inputs. These inputs can change how the function behaves.
        //Instead of displaying 'Hello World' display the name of a person.
        //like Hello Jon. We can add a variable in between the () parenthesis.
        // This greet function has one parameter called name, name is like a
        //variable that is only meaningful inside this function. Inside the
        //function we can work with the name variable, but it won't be accessible
        //outside the function. Name is an input to this function. Display
        //this function with 'Hello' and + to concatenate two strings.

       // function greet(name) {
        //    console.log('Hello ' + name);
       // }
//When calling the greet function, we need to pass a value for the name variable.
        //or name parameter more accurately. So we can pass John here as an
        //argument. John is an argument to the greet function. name is a
        //parameter of the greet function. One of those thing's a lot of programmers
        //don't know. They don't know the difference between a parameter and an
        //argument. A parameter is what we have here at the time of declaration,
        //but the argument is the actual value of supply for that parameter.

        //greet('John');


//We can reuse this function with a different input. A function can have multiple
        // parameters. We can separate them using a comma,. Let's set another
        //parameter lastName. When calling argument for the lastName we'll see
        //what happens if we don't

        // function greet(name, lastName) {
        //   console.log('Hello ' + name + ' ' + lastName);
        // }
        //
        // greet('John', 'Smith');

//types of function's

//performing a task
//         function greet(name, lastName) {
//             console.log('Hello ' + name + ' ' + lastName);
//         }
//
//         greet('John', 'Smith');


        //Calculates a value
        //Call a function, name the function square, our function square will
        //take this parameter called number, now we need to calculate the square
        //of that number. Which is number * number. Then return this value to
        //whatever is calling that function. For that we use the return keyword
        //

        // function square(number) {
        //     return number * number;
        // };
        //Instead of calling the greet function we call the square function
        //So square we pass 2 and that returns a value. We can use that value to
        //initialize a varaible.
        //  square(2);
        //We can declare another variable called number and set it to the square
        // of 2.
        // function square(number) {
        //     return number * number;
        // };
        // let number = square(2);
        // console.log(square(2));

//then we can display that on the console. Save changes, returns 4.
        //we don't really need to declare a second variable let number = if all we
        //want to do is display the square of 2 on the console. We can exclude
        //and console.log to return result. The JS engine will call this funtion
        // (square(2)) and get the value, then pass the value to console.log
        //Returns 4

        // function square(number) {
        //     return number * number;
        // };
        //
        // console.log(square(2));

        //How many funtions in above code? 1. square function 2.console.log
        //technally a function call since it has parenthesis () where you can
        //pass arguments like a string or expression. That expression can be
        // a call to another function like (square(2).
        //A function is a set of statements that performs a task or calculates
        //a value.
        //A real world usage for a funtion is to have hundreds or thousands
        //of functions working together to provide the funcionality of that apllication.

//Javascript operators: We use operator along with variables and constants to
        //create expression. With Expressions we can implement logic and algorythms.
        //Operators in JS:Arithmetic, Assignment, Comparison, logical, and
        //bitwise operators.
//Arithmetic operators: used to perform mathematics

        // let x = 10;
        // let y = 3;
        // console.log(x + y);

        //(x + y) is an expression in JS. Expression is something that produces
//avalue. +, -, *, /(division), %(remainder), **(exponentiation) x to power of y.
        //are arithmetic operators
        // console.log(x + y); //addition
        // console.log(x - y); //subtraction
        // console.log(x * y); //multiplication
        // console.log(x / y); //division
        // console.log(x % y); //% remainder
        // console.log(x ** y); //** exponentiation x to the power of y
        // console.log(++); //Increment and decrement
        //
        //console.log(++x)
//put increment operator before x will add 1 to x returning the value of 11
        //  on console.

        //console.log(x++);
//in contrast if put this operator ++ after x it will return 10. It will log
        // x then display x only incrementing plus 1 after the display prints
        //we can add another console.log to verify
       // console.log(x);

        //returns 11 meaning the increment of 1 ++ was added after displaying
        //the log on the console.

//Decrement (--):
        //console.log(--x);
        //return 9. We're decrementing the value of x by 1 and displaying it on
        //the console.

//Assignment operators:
        //Using assignment operator = to assign 10 to x
        // let x = 10;
        //
        // // x++; //same as
        // // x = x + 1; //take value of x add 1 to it use
        // // // assignment operator = assign new value of x. x = 11 now.
        // //
        // // //if we want to add 5 increment operator will not work. How can we do
        // // //that.
        // //
        // // x = x + 5; //but there's a simpler way to use shorthand addition.
        // // //We can use the addition asignment operator like this.
        // // x += 5;
        //
        // //Multiply value of x by 3
        // x = x * 3;
        // x *= 3; // multipliation assignment operator *=

//Comparison Operators: Compare value of a variable with something else. 2 types
        //of comparison operators. 1. Relational operator 2. Equality Operator
        //here we have x set to a value of 1.
//         let x = 1
// //check if x is greater than 0.
//         console.log(x > 0); //returns true. The result of an expression that
//         //includes a comparison operator is a boolean it's true or false.
//
//         console.log(x >= 1); //returns true. greater than or equal to >=
//         console.log(x < 1); //returns false. less than
//         console.log(x <= 1); //returns trues. less than or equal to <=
//         //These above are Relational Operators
//
//         //These below are Equality Operators
//         console.log(x === 1); //returns true. equal to === type, value
//         console.log(x !== 1); //returns false. Not equal to x not same type
//         // and value as 1

//Equality operators:
        //=== Strict equality operator same value and type
        //== lose equality operator. Doesn't care about types matching, if theyre
        //not matching it will conver the right side to match the left side and
        //then it will only check if the values are equal.

// console.log(1 === 1); //return true. Strict equality operator
//console.log(1 == 1); //return true. Lose equality operator
//
//         console.log('1' === 1); //returns false. String 1 not same type or value
//         // as number 1.
//
//         console.log('1' == 1); //returns true.
//         //In this case ==operator looks at the value on the left side. Here
//         //we have a string'' of '1'. b/c ==operator will change right side number
//         //to string'' of '1' to match value.
//
//         console.log(1 == 1); //returns true
//
//         console.log(true == 1);//returns true. It's matching left side to right side.
//Best practice is to use strict equality since it's more accurate.

//Ternary Operator or Conditional Operator:
        //Problem::: If a customer has over 100 points;
        //they are a 'gold' customer, otherwise;
        //they are a 'silver' customer.

        //Start by declaring a variable keeping track of number of points.

        let points = 110;

//add a variable to declare type of customer gold, silver.

        //declare variable called type to represent the type of customer,
        // then use the ternary operator
        let type = points > 100;










