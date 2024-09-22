"use strict";
let x = 1;
console.log(x);
let y;
y = 1;
y = "ravi";
console.log(y);
let z = 1;
console.log(z);
function greet(name) {
    console.log("hello world" + name);
}
greet("ravi");
function sumUp(a, b) {
    console.log(a + b);
}
sumUp(1, 2);
function sumUpAfterOneSecond(fn) {
    setTimeout(() => {
        fn(2, 3);
    }, 1000);
}
sumUpAfterOneSecond(sumUp);
function isLegal(user) {
    return user.age > 18;
}
console.log(isLegal({ firstName: "ravi", lastName: "kant", age: 20 }));
function isLegal2(user) {
    return user.age > 18;
}
console.log(isLegal2({ firstName: "ravi", lastName: "kant", age: 20 }));
class Employee {
    constructor(name, age, fullName, department) {
        this.name = name;
        this.age = age;
        this.fullName = fullName;
        this.department = department;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    getDept() {
        console.log(this.department);
    }
    bye() {
        console.log("bye" + this.fullName);
    }
}
function employeeData(emp) {
    console.log(`name is ${emp.fullName} and age is ${emp.age} and email is ${emp.email}`);
}
employeeData({ fullName: "ravikant", age: 18 });
function getSalary(s) {
    console.log(s);
}
getSalary(101);
getSalary("101");
const tl = {
    name: "ravi",
    startDate: new Date(),
    department: "SDE"
};
console.log(tl);
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3]));
var Week;
(function (Week) {
    Week[Week["SUN"] = 0] = "SUN";
    Week[Week["MON"] = 1] = "MON";
    Week[Week["WED"] = 2] = "WED";
})(Week || (Week = {}));
console.log(Week.MON);
function findDay(day) {
    if (day == Week.SUN) {
        console.log(`Day is ${Week.SUN}`);
    }
    else if (day == Week.MON) {
        console.log(`Day is ${Week.MON}`);
    }
    else {
        console.log(`Day is ${Week.WED}`);
    }
}
findDay(Week.MON);
function printFirstElement(arr) {
    return arr[2];
}
console.log(printFirstElement([1, 2, 3]));
console.log(printFirstElement(["ravi", "kant", 3]));
console.log(printFirstElement([1.23, 2.12, 3]));
const hii = () => {
    return "hiii";
};
console.log(hii() + " adfaa afs");
