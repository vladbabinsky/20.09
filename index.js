//********************** Task 1 **********************//
function multiplyNumbers(a, b) {
    if (isNaN(a)) {
        alert('Error: first argument must be a number');
        return;
    }
    if (isNaN(b)) {
        alert('Error: second argument must be a number');
        return;
    }
    let result = a * b;
    return result;
}

//********************** Task 2 **********************//
function getUserName() {
    let userInputName = prompt("Please enter your name:");
    return userInputName;
}

//********************** Task 3 **********************//
function isAdult() {
    let userAge = prompt("Please enter your age:");
    if (userAge >= 18) {
        alert("You are an adult.");
    } else {
        alert("You are not an adult.");
    }
}

//********************** Task 4 **********************//
function addNumberToArray(myArray, newNum) {
    myArray.push(newNum);
    return myArray;
}

//********************** Task 5 **********************//
function calculateGrade(score) {
    let grade;
    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else if (score >= 0 && score < 60) {
        grade = 'F';
    }
    return grade;
}

//********************** Task 6 **********************//
function confirmExit() {
    let userConfirm = confirm("Are you sure you want to exit?");
    if (userConfirm === true) {
        alert("You chose to exit.");
    } else {
        alert("You chose not to exit.");
    }
}

//********************** Task 7 **********************//
function sumArray(userArray) {
    let total = 0;
    for (let i = 0; i < userArray.length; i++) {
        total = total + userArray[i];
    }
    return total;
}

let numArr = [1, 2, 3, 4, 5];
console.log(sumArray(numArr));

//********************** Task 8 **********************//
function findMaxNumber(numArr) {
    let maxNumber = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > maxNumber) {
            maxNumber = numArr[i];
        }
    }
    return maxNumber;
}

let myNumArr = [1, 5, 3, 9, 2];
console.log(findMaxNumber(myNumArr));

//********************** Task 9 **********************//
function compareTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//********************** Task 10 **********************//
function reverseString(stringg) {
    return stringg.split('').reverse().join('');
}

//********************** Task 11 **********************//
function getOddNumbers(arrayOfNums) {
    let oddNums = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] % 2 !== 0) {
            oddNums.push(arrayOfNums[i]);
        }
    }
    return oddNums;
}

let randomArr = [1, 5, 3, 9, 2];
console.log(getOddNumbers(randomArr));

//********************** Task 12 **********************//
function greetUser(greeting, userName) {
    let message = `${greeting}, ${userName}!`;
    alert(message);
}

greetUser('Hello', 'Ivan');

//********************** Task 13 **********************//
function sumUsingApply(userArray) {
    let total = userArray[0];
    for (let i = 1; i < userArray.length; i++) {
        total += userArray[i];
    }
    return total;
}

let anotherNumArr = [1, 5, 3, 9, 2];
console.log(sumUsingApply(anotherNumArr));


//********************** Task 14 **********************//
function multiplyWithBind(num1, num2) {
    let multiply = function (x, y) {
        return x * y;
    };
    let boundMultiply = multiply.bind(null, num1);
    return boundMultiply(num2);
}

console.log(multiplyWithBind(5, 10));

//********************** Task 15 **********************//
function isPalindrome(userStr) {
    let reversedStr = userStr.split('').reverse().join('');
    return userStr === reversedStr;
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("hello"));

//********************** Task 16 **********************//
function getPositiveNumbers(userNumbers) {
    let positiveNumbers = userNumbers.filter(function (num) {
        return num > 0;
    });
    return positiveNumbers;
}

let numberArray = [-1, 5, -3, 9, 0];
console.log(getPositiveNumbers(numberArray));

//********************** Task 17 **********************//
function printArray(userNumbers) {
    for (let i = 0; i < userNumbers.length; i++) {
        alert(userNumbers[i]);
    }
}

let numbers = [1, 2, 3];
printArray(numbers);


//********************** Task 18 **********************//

function getAverage(userArray) {
    let total = userArray[0];
    for (let i = 1; i < userArray.length; i++) {
        total += userArray[i];
    }
    let average = total / userArray.length;
    return average;
}

let numbersArray = [1, 2, 3, 4, 5];
let averageValue = getAverage(numbersArray);

console.log('Average value of the array:', averageValue);

//********************** Task 19 **********************//
function checkPassword(correctPassword) {
    let userPassword = prompt("Please enter your password:");
    if (userPassword === correctPassword) {
        alert("Password is correct.");
    } else {
        alert("Password is incorrect.");
    }
}

checkPassword("12345");

//********************** Task 20 **********************//
function fizzBuzz(userNumber) {
    if (userNumber % 3 === 0 && userNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else if (userNumber % 3 === 0) {
        console.log("Fizz");
    } else if (userNumber % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(userNumber);
    }
}

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(7);
