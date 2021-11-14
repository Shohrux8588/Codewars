// Elevator Distance
function elevatorDistance(array) {
  let distance = 0;
  for(let i = 0; i < array.length - 1; i++){
    distance += Math.abs(array[i]-array[i + 1]);
  }
  return distance;
}

const array1 = [1, 2, 3, 4];

function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator, currentValue;
}

let sum = array1.reduce(reducer, 5);
array1.reduce((previousValue, currentValue, currentIndex, array) => { 
 console.log("previousValue: "+previousValue);
 console.log("currentValue: "+currentValue);
 console.log("currentIndex: "+currentIndex);
 console.log("array: "+array);
 return "previous";
});

const pipe = (...fn) => (a) => fn.reduce((R, f) => f(R), a);

let obj1 = [{ x: 15 }, { x: 2 }, { x: 3 }];
let sumObj1 = obj1.reduce((a, b) => a + b.x, 0);
console.log(sumObj1);

let arr1=[[0, 1], [2, 3], [4, 5]];
let flattened = arr1.reduce((previous, current)=>{
 return previous.concat(current);
 // return [...previous, ...current];
},[]);
console.log(flattened);  


counting Names
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
names.sort((a,b)=>{
 if(a>b) return 1;
 else if(a<b) return -1;
 else return 0; 
});
let countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames);


let people = [
    { name: 'Shaun', age: 20 },
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Chun Yu', age: 21 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);
        return acc;
    }, {})
}

let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let uniqueArray = myArray.reduce((a, b) => {
    if (!a.includes(b)) a.push(b);
    return a;
}, []);
console.log(uniqueArray);


// Function composition enabling piping
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => x * 3;
const quadruple = x => x * 4;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6));
console.log(multiply9(9));
console.log(multiply16(16));
console.log(multiply24(10));

pipe = (...fn) => (a) => fn.reduce((R, f) => f(R), a)

function compose(...fn) {
    return function(value) {
        fn = fn.reverse();
        return fn.reduce((previousValue, currentFunction, index) => {
            if (index === 0) {
                return currentFunction(...arguments);
            } else {
                return currentFunction(previousValue);
            }
        }, value);
    }
}

const add2 = a => a + 2;
const mul = (a, b) => a * b;
const mul2 = a => a * 8;
// console.log(add2(mul(2,7)));
console.log(add2(mul2(5)))
const addAndMul = compose(add2, mul2);
console.log(addAndMul(5));


console.log(1);
setTimeout(()=>{
    console.log(2)
},0);
console.log(3);

for(let i = 0)


var searchInsert = function(nums, target) {
    let start = 0,
        end = nums.length - 1,
        guess;
    while (start <= end) {
        guess = Math.round((start + end) / 2);
        if (nums[guess] === target) {
            return guess;
        } else if (nums[guess] > target) {
            end = guess - 1;
        } else {
            start = guess + 1;
        }
    }
    return start;
};
let nums = [1];
let target = 0;
console.log(searchInsert(nums, target));

var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    console.log(target);
    return target;
};

let nums = [1];
let index = [0];

createTargetArray(nums, index);

var maxProductDifference = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let len = sortedNums.length;
    let [x1, y1] = [sortedNums[0], sortedNums[1]]
    let [x2, y2] = [sortedNums[len - 2], sortedNums[len - 1]];
    let max = x2 * y2 - x1 * y1;
    console.log(max);
    return max;
};

let nums = [5, 6, 2, 7, 4];
maxProductDifference(nums);

setTimeout(()=>{
    for(let i = 0 ; i<10; i++){
        console.log(i);
    }
}, 1000);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

const prevMultOfThree = n => {
    if (n % 3 === 0) {
        return n;
    } else if (n < 10) {
        return null;
    } else {
        n = Math.floor(n / 10);
        return prevMultOfThree(n);
    }
}
console.log(prevMultOfThree(25));

function binarySearch(arr, target) {
    let low = 0,
        high = arr.length - 1,
        mid, 
        guess;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];
        if (guess === target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

let arr = [1, 2, 3, 4, 5];
let target = 2;
let result = binarySearch(arr, target);
console.log(result);

JavaScript Demo: Function.call()
function Product(name, price){
    this.name = name;
    this.price = price;
}

function Food(name, price){
    Product.call(this, name, price);
    this.category = "food";
}

let food1 = new Food("cheese", 5);
console.log(food1.name);

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() {
            console.log('#' + i + ' ' + this.species +
                ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

const obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
};

greet.call(obj); // cats typically sleep between 12 and 16 hours

var maximum69Number = function(num) {
    let str = String(num).replace("6", "9");
    return Number(str);
};

let num1 = 9669;
let num2 = 9996;
let num3 = 9999;
maximum69Number(num3);

var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    s = s.toLowerCase();
    let arr = s.split("");
    let firstHalf = arr.slice(0, arr.length / 2);
    let secondHalf = arr.slice(arr.length / 2);
    let num1 = firstHalf.reduce((a, b) => {
        if (vowels.includes(b)) {
            a++;
        }
        return a;
    }, 0);
    let num2 = secondHalf.reduce((a, b) => {
        if (vowels.includes(b)) {
            a++;
        }
        return a;
    }, 0);
    console.log(num1, num2);
};

halvesAreAlike("textbook");

function reverseWords(str){
  let arr = str.split(" ");
  arr.reverse();
  return arr.join(" "); 
}

let str = "The greatest victory is that which requires no battle";
reverseWords(str);

function halvingSum(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + halvingSum(Math.floor(n / 2));
    }
}
console.log(halvingSum(25));

const _ = {};
_.map = function(arrToIterate, iteratorFunc) {
    if (iteratorFunc === undefined) {
        iteratorFunc = function() {};
    }
    let newArr = [];
    if(Array.isArray())
    for (let i = 0; i < arrToIterate.length; i++) {
        let returnFromIterator = iteratorFunc(arrToIterate[i], i, arrToIterate);
        newArr.push(returnFromIterator);

    }
    return newArr;
};

function square(n) {
    return n * n;
}

let newArr = _.map([4, 8], square);
console.log(newArr);



const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
parent.addEventListener("click", () => {
    console.log("Parent clicked");
});
child.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    e.stopPropagation();
    console.log("child - 1");
})
child.addEventListener("click", (e) => {
    console.log("child - 2");
})

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
        console.log(e.target.innerHTML);
    }
})




class Person {
    constructor(name) {
        this.name = name;
    }
    athome() {
        return this.name + ' is relaxing.';
    }
}
class Student extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    atuniversity() {
        return `${this.name} is learning ${this.subject}`;
    }
}
let student = new Student('Mark', 'computer science');
student.name;
student.subject;
console.log(student.athome());
student.atuniversity();

setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

console.log("code");

const lists = document.querySelectorAll("li");
const lists2=document.getElementsByTagName('li');
console.log(lists, lists2);


let obj1 = {
    name: "Anderson",
    athome() {
        return `${this.name} is at home.`;
    }
}

let obj2 = {
    name: "Bob",
    athome() {
        return `${this.name} is at home.`;
    }
}
console.log(obj1.athome.apply(obj2));

class Personality {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    login() {
        return `${this.fname} is logged in.`;
    }

    logout() {
        return `${this.fname} is logged out.`;
    }
}

let person1 = new Personality("Steve", "Jobs");
console.log(person1.fname);
console.log(person1.lname);
console.log(person1.login());
console.log(person1.logout());

function Employee(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.email = function() {
        return this.fname.toLowerCase() + this.lname.toLowerCase() + "@yandex.com";
    }
}

const employee1 = new Employee("John", "McAllister");
console.log(employee1.fname);
console.log(employee1.lname);
console.log(employee1.email());

var backspaceCompare = function(s, t) {
    function onlyStr(str) {
        let result = "";
        for (let letter of str) {
            if (letter !== "#") {
                result += letter;
            } else {
                result = result.slice(0, result.length - 1);
            }
        }
        return result;
    }
    return onlyStr(s) === onlyStr(t);
};

let s = "a##c";
let t = "#a#c";
backspaceCompare(s, t);


var sumOfUnique = function(nums) {
    let sum = 0;
    let uniqueArr = [];
    for (let num of nums) {
        let i = 0;
        nums.forEach(e => {
            if (num === e) {
                i++;
            }
        })
        if (i === 1) {
            sum += num;
        }
    }
    console.log(sum);
    return sum;
};
let nums = [2, 2, 2, 2];
sumOfUnique(nums);

var sumBase = function(n, k) {
    let sum = 0;
    let numKBase = (k === 10) ? String(n) : n.toString(k);
    for (let digit of numKBase) {
        sum += Number(digit);
    }
    return sum;
}
sumBase(42, 2);

var finalPrices = function(prices) {
    prices = prices.map((price, index) => {
        for (let i = index + 1; i < prices.length; i++) {
            if (price >= prices[i]) {
                price = price - prices[i];
                break;
            }
        }
        console.log(price);
        return price;
    })
    console.log(prices);
};

let prices = [10,1,1,6];
finalPrices(prices);

var canBeTypedWords = function(text, brokenLetters) {

    let result = 0;
    let words = text.split(" ");
    if(!brokenLetters) return words.length;
    words.forEach(word => {
        let bool = false;
        for (let letter of brokenLetters) {
            if (letter && word.includes(letter)) {
                bool = false;
                break;
            } else {
                bool = true;
            }
        }
        bool ? result++ : result;
    })
    console.log(result);
    return result;
};

let text = "hello world";
let brokenLetters = "";

canBeTypedWords(text, brokenLetters);

var sortArrayByParity = function(nums) {
    let evenNums = [];
    let oddNums = [];
    nums.forEach(num => {
        num % 2 === 0 ? evenNums.push(num) : oddNums.push(num);
    })
    return evenNums.concat(oddNums);
};

let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));

var repeatedNTimes = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const repeatedElement = sortedNums.find((element, index, array) => {
        if (element === array[index + 1]) {
            return element;
        }
    })
    console.log(repeatedElement);
    return repeatedElement;
};

let nums = [1, 2, 3, 4];
repeatedNTimes(nums);

var selfDividingNumbers = function(left, right) {
    let result = [];

    function checking(number) {
        let selfDividing = false;
        if (!String(number).includes("0")) {
            const digits = Array.from(String(number));
            selfDividing = digits.every(digit => number % Number(digit) === 0);

        }
        return selfDividing;
    }
    for (let number = left; number <= right; number++) {
        if (number < 10) {
            result.push(number);
        } else if (checking(number)) {
            result.push(number);
        }

    }
    return result;
};

const left = 1;
const right = 22;

selfDividingNumbers(left, right);


var tribonacci = function(n) {
    let numbers = [0, 1, 1];
    let result;
    if (n <= 2) {
        result = numbers[n];
    } else {
        for (let i = 3; i <= n; i++) {
            let number = numbers[i - 3] + numbers[i - 2] + numbers[i - 1];
            numbers.push(number);
        }
        result = numbers[n];
    }
    console.log(result);
    return result;
};

tribonacci(25);


String.prototype.vowel = function() {
  const regex = /^[aeiou]$/i;
  return regex.test(this);
};

const str = "uf";
console.log(str.vowel());

function lowercaseCount(str){
    const regex = /[a-z]/g;
    return str.match(regex).length;
}

lowercaseCount('abcABC123');

var sumZero = function(n) {
    let arr = [];
    if (n % 2 === 0) {
        for (let i = 1; arr.length < n; i++) {
            arr.push(i, -i);
        }
    } else {
        arr.push(0);
        for (let i = 1; arr.length < n; i++) {
            arr.push(i, -i);
        }
    }
    console.log(arr);
    return arr;
};

sumZero(5);
sumZero(3);
sumZero(1);


function urlify(str) {
    let trimStr = "",
        result = "",
        start, end;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            start = i;
            break;
        }
    }
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== " ") {
            end = i;
            break;
        }
    }
    trimStr = str.slice(start, end + 1);
    for (let i = 0; i < trimStr.length; i++) {
        if (trimStr[i] !== " ") {
            result += trimStr[i];
            if(i !== (trimStr.length - 1)&&trimStr[i+1]===" "){
                result += "%20"
            };
        }
    }
    console.log(result);
    return result;
}

urlify("  A    BCD");

function sumStrings(a, b) {
    let sum = 0;
    if (a.length >= 15 || b.length >= 15) {
        sum = BigInt(a) + BigInt(b);
    } else {
        sum = Number(a) + Number(b);
    }
    console.log(String(sum));
    return String(sum);
}


sumStrings('712569312664357328695151392', '8100824045303269669937');

function sumUp(number) {
    return (1 + number) * number / 2;
}
console.log(sumUp(2));

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let result;
arr.reduce((a, b) => {
    if (a + 1 !== b) {
        result = a + 1;
    }
    return b;
})
console.log(result);


var maximumUnits = function(boxTypes, truckSize) {
    let maximumUnits = 0;
    let sortedArr = boxTypes.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortedArr.length; i++) {
        let boxes = sortedArr[i][0];
        let units = sortedArr[i][1];
        if (truckSize >= boxes) {
            maximumUnits += boxes * units;
            truckSize -= boxes;
        } else if (truckSize && truckSize < boxes) {
            maximumUnits += truckSize * units;
            truckSize = 0;
        } else {
            break;
        }
    }
    console.log(maximumUnits);
    return maximumUnits;
};

const boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9]
];
let truckSize = 10;

maximumUnits(boxTypes, truckSize);

var finalValueAfterOperations = function(operations) {
    const regex = {
        increments: /^(\+\+X|X\+\+)$/,
        decrements: /^(\-\-X|X\-\-)$/
    }
    let x = 0;
    for (let operation of operations) {
        if (regex["increments"].test(operation)) {
            x++;
        } else if (regex["decrements"].test(operation)) {
            x--;
        }
    }
    console.log(x);
    return x;

};

let operations = ["++X", "X++", "X++"];
finalValueAfterOperations(operations);

var countKDifference = function(nums, k) {
    let numberOfPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                numberOfPairs++
            }
        }
    }
    console.log(numberOfPairs);
    return numberOfPairs;
};

let nums = [1, 2, 2, 1];
let k = 1;
countKDifference(nums, k);

function twoSort(s) {
    const sortedS = s.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    let firstValue = sortedS[0];
    firstValue = firstValue.split("").firstValue.join("***");
    console.log(firstValue);
    return firstValue;
}

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);


var isSquare = function(n) {
    if (n < 0) return false;
    const int = Math.sqrt(n);
    console.log(Math.floor(int) === int);
    return Math.floor(int) === int;
}

isSquare(3);

var countMatches = function(items, ruleKey, ruleValue) {
    let result = 0;
    for (let item of items) {
        let [type, color, name] = item;
        if (ruleKey === "type" && type === ruleValue) {
            result++;
        } else if (ruleKey === "color" && color === ruleValue) {
            result++;
        } else if (ruleKey === "name" && name === ruleValue) {
            result++;
        }
    }
    return result;
};

let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
];
let ruleKey = "color";
let ruleValue = "silver";

let items1 = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"]
];
let ruleKey1 = "type";
let ruleValue1 = "phone";
countMatches(items, ruleKey, ruleValue);
countMatches(items1, ruleKey1, ruleValue1);


var checkIfPangram = function(sentence) {
    const arr = sentence.split("");
    console.log([...new Set(arr.sort())].length);
    return [...new Set(arr.sort())].length;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
checkIfPangram(sentence);

