/**
 *
 * @param message

 by ref or by value


 */

function sayHello(message: string) {
  message = 'foo bar';
}

let helloWorld = 'hello world'

sayHello(helloWorld)


console.log(helloWorld);

function myArray(arr: number[]) {
  arr.push(1);
}

const stamArray = [1,2,3];

myArray(stamArray);
