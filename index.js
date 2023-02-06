
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

        let selection = 'name';
        person[selection] = 'Mary';

        console.log(person.name);


