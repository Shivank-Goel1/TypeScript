export {};
let message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;//both block level

//let x = 5
//this will give error here

let sum;//can be declared without initialization
const title = `typescript learning`;//cannot be declared without initialization

//declaration with datatypes(helps with making less type errors and also helps intellisense)
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Shivank Goel';

let sentence: string = `My name is ${name} I am a beginner in Typescript`;

console.log(sentence);


//sub-datatypes
let n:null = null;
let u:undefined = undefined;
//known as sub-datatypes because they can also be used as -
let isNew : boolean = null;//only possible because strictNullChecks in tsconfig is set as false
let myName : string = undefined;


//types based on basic types


//Arrays
let list1: number[] = [1,2,3];
let list2 : Array<number> = [4,5,6];//both do same thing, use syntax you like


//tuples
let person1: [string, number] = ['Gaurav', 20];//tuples are like arrays in js but with static size defined at the time of declaration
// person1 = ['Shivank', 20, 9.00] --- this will give error as no. of elements is fixed to 2


//Enums
//enum helps define a set of named constants with underlying datatypes
//by default each hava number datatypes
enum Color {Red,Green,Blue};//by default Red is assigned 0, Green -- 1,Blue -- 2
enum Color2{Red1 = 3, Green1, Blue1}; 
let c: Color = Color.Blue; 
let c2 : Color2 = Color2.Green1;
console.log(c);
console.log(c2);


//any
// if not sure of datatype of the variable defined
let randomValue : any = 10;
randomValue = true;
randomValue = 'Shivank'
randomValue = null;

//Issue with any datatype
// randomValue();
// console.log(randomValue.name);
// randomValue.toUpperCase();//nothing throws an error until running the file
//almost everything can be done with randomValue whose current data-type is null

//To fix this

//unKnown
let myVariable: unknown = 10;
myVariable = "shiv";
myVariable = true;
myVariable = 's';

// myVariable(); --- This gives an error as current datatype is unknown

//again, to fix this
// (myVariable as string).toUpperCase();
console.log((myVariable as string).toUpperCase());


//typescript infers the datatype on its own if you initialize at the time of declaration
let b = 20;
// let b = false; --- goves error as typscript infered b's datatype as number
//omly does this in case of variables declaration


//Union of types
let multitypes : number | boolean;
multitypes = 10;
multitypes = true; // i.e assign more than one datatypes
// Reason to use this is that any doesnot get intellisense support but UNION does


//functions in typscript
function add(num1 : number, num2?: number) : string {//? put in fron of optional parameter
    // return (num1 + num2); --- gives error because returns number
    if(num2)
        return (`${num1 + num2}`);
    else
        return `${num1}`;
}
let added : string = add(5,10);
// let added2 : string = add(5, '10'); --- gives error because 10 is string datatype
let added3 : string = add(8);
console.log('FUNCTIONS :-')
console.log(added);
console.log(added3);

function add2(num1 : number, num2: number = 10) : string {//= value put in fron of default parameter
    // return (num1 + num2); --- gives error because returns number
        return (`${num1 + num2}`);
}
 
let added4 : string = add2(7);
let added5 : string = add2(1,2);
console.log(`default with no parameter for it : ${added4}`);
console.log(`default with parameter for it : ${added5}`);


//objects are specified as datypes in typescript using - 
//INTERFACE

interface Person{
    firstName : string;
    lastName : string;
}//Here interface is small so doesnot seem much but imagine a API call with 100 properties and calling that 20 types, at that type interface makes coding easier and shorter

function fullName(person : Person){
    console.log(`His name is ${person.firstName} ${person.lastName}`);
}

let p1 = {
    firstName : 'Tony',
    lastName : 'Stark'
};

console.log('Interface :-')
fullName(p1);


//Classes can be used and are supported in TS

class Employee{
    // private employeeName : string; would have only accessed inside the class
    // protected employeeName : string; could also be accesseed in derived classes
    public employeeName : string; //can be accessed anywhere in code

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}
console.log(`CLASSES :-`);
let emp1 = new Employee('Shivank');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegate(){
        console.log(`${this.employeeName} delegates tasks`);
    }
}

let m1 = new Manager('Shiven');
m1.delegate();
m1.greet();
console.log(m1.employeeName);

