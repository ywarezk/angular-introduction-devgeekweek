"use strict";
console.log('hello world');
// const, let, var
/**
 *
                            
        number of assignments   scope
 
 var             infinite      functional
 
 let			 infinite         {}
 
 const 				1			  {}
 
 */
var message = 'hello world';
var myNumber = 42;
var myBoolean = true;
var myName;
function sayHello(msg) {
    console.log(msg);
    return msg.length;
}
function something(someCondition) {
    var message = '';
    // ...
    if (someCondition) {
        var message = '...';
    }
}
// sayHello(42); //Error
sayHello('hello world');
// arrays example
var todoList = [
    'walk with my dogs',
    'play with dogs'
];
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//# sourceMappingURL=hello.js.map