/*
	typescript - add types to the JS
	browser or node doesn't understand TS, so TS code get compiles down to JS and it runs
	and when the type error is there, it can't convert to JS
	in the JS file, it will use "use strict" - this means type is strict

	tsc = compiler of TS

	first we've to convert the current directory into node and ts dir
	npm init -y
	tsc --init

	to compile TS into JS
	tsc -b

	tsconfig
	1. target - compiler in which TS gonna be compiled to JS
	2. rootDir - uppermost folder for .ts files location, standard is source
	3. outDir - compiled JS's location, standard is dist
	// the outDir would be same as rootDir, means their structure(folder and subfolders) would be same
	4. noImplicitAny - if we set it to false, then no error if we don't give types, because then it will have 'any' type
	5. removeComments - if true then no comments in JS files, should be true because no one will look to JS files

	normal types
	number, string, boolean, Date,
	unknown(if we don't know its type like error in catch block, we may never know which type of error is coming)
	any(we can assign any type of value), null
	*/

let x: number = 1;
// x = "ravi" // this line will give you error = type string is not assignable to type number
console.log(x)

// what if we don't give type and don't assign the value 
let y;
y = 1
y = "ravi"
console.log(y)
// we can assign anything

// what if we don't give type but assign a value
let z = 1;
// z = "ravi"
console.log(z)
// it auto detect the type of value assigned, so we can't give other types

// type to arguments in a function
function greet (name: string) {
	console.log("hello world" + name)
}
greet("ravi") // if we give another type here, it will give error

// type to a function
function sumUp(a: number, b: number): void {
	console.log(a+b)
}
sumUp(1,2)

// type to callback function
function sumUpAfterOneSecond(fn: (a: number, b: number) => void) {
	setTimeout(() => {
		fn(2,3)
	}, 1000);
}
sumUpAfterOneSecond(sumUp)

// interface = type to object
interface User {
	firstName: string,
	lastName: string,
	age: number
}

function isLegal(user: User) {
	return user.age > 18
}
console.log(isLegal({ firstName: "ravi", lastName: "kant", age: 20})) // we cannot left any key or add a new key

// instead of creating interface, we can just give type in the function argument
function isLegal2(user : { // problem with this is, we've to do this everytime someone use User
	firstName: string;			 // with interface, we just have to define it once
	lastName: string;
	age: number;
}) {
	return user.age > 18
}
console.log(isLegal2({ firstName: "ravi", lastName: "kant", age: 20}))

// implementing interface
interface Person {
	name: string;
	age: string | number; // doesn't matter if we age as string or number
	greet: (phrase: string) => void;
}

interface employeeInterface {
	name: string, // we cannot give name here a number because then interace teams won't be able to extens Person and this interface
	department: string
}

interface teams extends Person, employeeInterface {
	getDept: () => void;
}

class Employee implements teams {
	name: string;
	age: number;
	department: string;
	// we can also create our own variables
	fullName: string;
	
	constructor (name: string, age: number, fullName: string, department: string) {
		this.name = name;
		this.age = age;
		this.fullName = fullName;
		this.department = department;
	}

	// we need all the interface's abstract method implemented
	greet (phrase: string) {
		console.log(`${phrase} ${this.name}`)
	}

	getDept () {
		console.log(this.department)
	}

	// we can also create our own methods
	bye () {
		console.log("bye" + this.fullName)
	}
}

// types - same use as interface but has some difference
type Employee2 = {
	fullName: string;
	age: number;
	email?: string; // this means optional, if not provided then it will be undefined(another type in typescript)
	// we can option in interfaces also means anywhere
}

function employeeData (emp: Employee2) {
	console.log(`name is ${emp.fullName} and age is ${emp.age} and email is ${emp.email}`)
}
employeeData({fullName: "ravikant", age: 18})

// OR - multiple type for a type
type Salary = string | number
function getSalary(s: Salary) {
	console.log(s);
}
getSalary(101);
getSalary("101")

// AND - joining multiple type in a type
type Employee3 = {
	name: string,
	startDate: Date
}
type Manager = {
	name: string,
	department: string
}
type TeamLead = Employee3 & Manager

const tl: TeamLead = {
	name: "ravi",
	startDate: new Date(),
	department: "SDE"
}
console.log(tl)
// when we do AND of types then we can assign same keys different type because after AND
// then same name key will have type 'never', and we can't give any value to that key

/*
	only diff bw types and interfaces is we can implement interfaces but we can't implement types
	and interfaces are totally for object whereas we ca define type for single variables also
 */

// Arrays - just append [] after giving type
function findMax(arr: number[]) {
	return Math.max(...arr);
}
console.log(findMax([1,2,3]))

// we have enums in ts
enum Week {
	SUN, // they are nothing but integer, starting from 0, we can also give them values
	MON,
	WED
}
console.log(Week.MON)

function findDay(day: Week) {
	if (day == Week.SUN) {
		console.log(`Day is ${Week.SUN}`) // it will print 0
	} else if (day == Week.MON) {
		console.log(`Day is ${Week.MON}`) // it will print 1
	} else {
		console.log(`Day is ${Week.WED}`) // it will print 2
	}
}
findDay(Week.MON)

// we also have generics in ts
function printFirstElement<T>(arr : T[]) {
	return arr[2];
}
console.log(printFirstElement<number>([1,2,3])) // we should give type when we call the function
console.log(printFirstElement(["ravi","kant",3])) // otherwise we can pass any type of value
console.log(printFirstElement([1.23,2.12,3]))