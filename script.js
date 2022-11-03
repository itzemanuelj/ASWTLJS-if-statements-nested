// An alternative to using && to test multiple conditions in a single if statement is ______ ifs.
let nesterd;

// You communicate the nesting to JavaScript with the placement of what two characters? Don't type a space between them.
if (a = b) {
  console.log('a');
}

// This is the first line of an if statement.
if (a !== b) {
// Enter the first 6 characters of the next line, which is a second-level if.
}

// create an if statement enclosing a nested if. If a equals b, then if c equals d, then f is assigned e.
if (a === b) {
    if (c === d){
        f === e;
    }
}

// Code the first line of an if statement that's followed by the first line of a nested if. If a equals b, then if c doesn't equal d....
if (g === h) {
    if(a !== b){
    }  c !== d;
}

// Code an if statement enclosing a nested if. If a equals 1, then if c equals "Max", then display an alert that says "OK".

if (a === 1) {
    if(c === 'Max'){
        alert('OK');
    }
}

if (number >= 0) {
    if (number == 0) {
        print("Number is 0")
    }
}
 
if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }
//   Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1 && c === 'Max'){
    alert('OK');
}      

if (a !== 0 && b > 1) {

}
// Code the first lines of nested if statements that test the same conditions as the above code.

if (a !== 0){
    if (b > 1){
//logic
    }
}

if (a !== 0 && b > 1) {

}

    // Code the first lines of nested if statements that test the same conditions as the above code.
if (a !== 0){
    if (b > 1) {

    }
}



if (a !== 0 && b > 1 && c < 1) {
//logic
}
    // Code the first lines of nested if statements that test the same conditions as the above code.

if (a !== 0) {
    if (b > 1) {
        if (c > 1) {

        }
    }
}

// Code nested if statements that test whether a first variable equals a particular number and whether a second variable equals another number. If so, display an alert message.

if (time === 2) {
    if (time > 1) {
        alert('yes');
    }
}

// Code nested if statements that test whether a first variable equals a second variable, whether a third variable doesn't equal a fourth variable, and whether a fifth variable is greater than a sixth variable. If all tests pass, assign a number value to a seventh variable, which hasn't been declared beforehand.
if (time === total){
    if (age !== number){
        if (number > time){
            number = total;
        }
    }
}

if (a === b) {
    if (c !== d) {
      if (e > f) {
        var g = 1;
      }
    }
  }

//   This is the first line of an if statement.
  if (a !== b) {
    if (a === b) {
        if (a > b) {
            c = b;
        }
    }
  }
//   Enter the first 6 characters of the next line, which is a second-level if. 

if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }
//   Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1 && c === 'Max') {
    alert('OK');
}

if (a !== 0 && b > 1) {

}
    // Code the first lines of nested if statements that test the same conditions as the above code.
if (a !== 0) {
    if (v > 1) {
        //logic if neede in nested function
    }
}

if (a !== 0 && b > 1 && c < 1) {

}
    // Code the first lines of nested if statements that test the same conditions as the above code.
if (a !== 0) {
    if (b > 1) {
        if (c < 1) {

        }
    }
}

// Code nested if statements that test whether a first variable equals a particular number and whether a second variable equals another number. If so, display an alert message.
if (varty1 === 1) {
    if (varry2 === 2) {
        alert('OK');
    }
}

// Code nested if statements that test whether a first variable equals a second variable, whether a third variable doesn't equal a fourth variable, and whether a fifth variable is greater than a sixth variable. If all tests pass, assign a number value to a seventh variable, which hasn't been declared beforehand.

if (firstVar === secomfVar) {
    if (thirdVar !== forthVar) {
        if (fifthVar > sixthVar) {
            seventhVar = 1;
        }

    }
}

// Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
 let total = 10;
 let cost = 100;

 if (total === cost ) {
    if (total <= cost) {
        alert('cost is less than total');
    }
 }

// Declare 2 variables. Assign one of them your first name and the other one your last name.
// Code 2 prompts, asking for your first and your last name.
// Using nested if statements, test whether your answers match the two variables. If so, display an alert.

let fname = 'Justn';
let lName = 'Jones';

fname = prompt('Enter your first name');
lNmae = prompt('Enter your last name')
if (fname === 'Justin') {
    if (lNmae === 'Jones') {
        alert('hello my name is ' + fname + lName)
    }
}