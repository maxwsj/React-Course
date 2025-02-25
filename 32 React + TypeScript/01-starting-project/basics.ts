// Primitives: number, string, boolean
// More complex types: arrays, objects
// Functions types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
let isInstructor: boolean;

// More complex types
let hobbies: string[];
let cars: number[];
let choices: boolean[];

hobbies = ['Teste', 'Teste2'];
cars = [1, 2, 3];
choices = [true, false, false];

// Objects
let personss: {
   name: string;
   age: number;
};

personss = {
   name: 'Max',
   age: 32,
};

// Creating an array of objects
let people: {
   name: string;
   age: number;
}[];

// Type inference
let course = 'React - the complete guide';

// Union Type

let types: string | number = 'React - the complete guide';
types = 11234;

// Type Aliases

type Person = {
   name: string;
   age: number;
};

let person: Person;

// Functions and types
function add(a: number, b: number): number | string {
   return a + b;
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b'], 'd');
