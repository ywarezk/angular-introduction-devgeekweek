console.log('hello world');

// const, let, var

/**
 * 
							
 		number of assignments   scope
 
 var             infinite      functional
 
 let			 infinite         {}
 
 const 				1			  {}
 
 */

const message: string = 'hello world';
const myNumber: number = 42;
const myBoolean: boolean = true;

let myName;

function sayHello(msg: string): number {
	console.log(msg);
	return msg.length;
}

function something(someCondition: boolean) {
	var message = '';
	
	// ...
	
	if (someCondition) {
		var message = '...'
	}
}

// sayHello(42); //Error
sayHello('hello world');

// arrays example

const todoList: string[] = [
	'walk with my dogs', 
	'play with dogs'
]

// todoList.push(true);
// todoList = [];

interface Hello {
	
}

abstract class Person {
	
}