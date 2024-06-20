"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
var x = 10;
var y = 20; //both block level
//let x = 5
//this will give error here
var sum; //can be declared without initialization
var title = "typescript learning"; //cannot be declared without initialization
//declaration with datatypes(helps with making less type errors and also helps intellisense)
var isBeginner = true;
var total = 0;
var name = 'Shivank Goel';
var sentence = "My name is ".concat(name, " I am a beginner in Typescript");
console.log(sentence);
//sub-datatypes
var n = null;
var u = undefined;
//known as sub-datatypes because they can also be used as -
var isNew = null; //only possible because strictNullChecks in tsconfig is set as false
var myName = undefined;
//types based on basic types
//Arrays
var list1 = [1, 2, 3];
var list2 = [4, 5, 6]; //both do same thing, use syntax you like
//tuples
var person1 = ['Gaurav', 20]; //tuples are like arrays in js but with static size defined at the time of declaration
// person1 = ['Shivank', 20, 9.00] --- this will give error as no. of elements is fixed to 2
//Enums
//enum helps define a set of named constants with underlying datatypes
//by default each hava number datatypes
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //by default Red is assigned 0, Green -- 1,Blue -- 2
var Color2;
(function (Color2) {
    Color2[Color2["Red1"] = 3] = "Red1";
    Color2[Color2["Green1"] = 4] = "Green1";
    Color2[Color2["Blue1"] = 5] = "Blue1";
})(Color2 || (Color2 = {}));
;
var c = Color.Blue;
var c2 = Color2.Green1;
console.log(c);
console.log(c2);
//any
// if not sure of datatype of the variable defined
var randomValue = 10;
randomValue = true;
randomValue = 'Shivank';
randomValue = null;
//Issue with any datatype
// randomValue();
// console.log(randomValue.name);
// randomValue.toUpperCase();//nothing throws an error until running the file
//almost everything can be done with randomValue whose current data-type is null
//To fix this
//unKnown
var myVariable = 10;
myVariable = "shiv";
myVariable = true;
myVariable = 's';
// myVariable(); --- This gives an error as current datatype is unknown
//again, to fix this
// (myVariable as string).toUpperCase();
console.log(myVariable.toUpperCase());
//typescript infers the datatype on its own if you initialize at the time of declaration
var b = 20;
// let b = false; --- goves error as typscript infered b's datatype as number
//omly does this in case of variables declaration
//Union of types
var multitypes;
multitypes = 10;
multitypes = true; // i.e assign more than one datatypes
// Reason to use this is that any doesnot get intellisense support but UNION does
//functions in typscript
function add(num1, num2) {
    // return (num1 + num2); --- gives error because returns number
    if (num2)
        return ("".concat(num1 + num2));
    else
        return "".concat(num1);
}
var added = add(5, 10);
// let added2 : string = add(5, '10'); --- gives error because 10 is string datatype
var added3 = add(8);
console.log('FUNCTIONS :-');
console.log(added);
console.log(added3);
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    // return (num1 + num2); --- gives error because returns number
    return ("".concat(num1 + num2));
}
var added4 = add2(7);
var added5 = add2(1, 2);
console.log("default with no parameter for it : ".concat(added4));
console.log("default with parameter for it : ".concat(added5));
function fullName(person) {
    console.log("His name is ".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: 'Tony',
    lastName: 'Stark'
};
console.log('Interface :-');
fullName(p1);
//Classes can be used and are supported in TS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
console.log("CLASSES :-");
var emp1 = new Employee('Shivank');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegate = function () {
        console.log("".concat(this.employeeName, " delegates tasks"));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Shiven');
m1.delegate();
m1.greet();
console.log(m1.employeeName);
