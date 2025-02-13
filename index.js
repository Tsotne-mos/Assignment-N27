let fruits = ["Peach", "Cherry", "Watermelon"];

console.log( fruits[2] );

console.log( fruits[0] );

console.log( fruits[1] );

console.log( fruits.length );

console.log( fruits );

console.log( fruits[fruits.length-1] );

console.log( fruits.pop() );

console.log( fruits );

fruits.push("coconut", "Corn");

console.log( fruits )

console.log( fruits.shift() );

console.log( fruits )

fruits.unshift('Peach');

console.log( fruits );

console.log( fruits.indexOf('Peach') );

console.log( fruits.lastIndexOf('coconut') );

let arr = ["I", "go", "home", "everyday"];

delete arr[0];

console.log( arr[1] );

console.log( arr.length );

arr.splice(1,2 );

console.log( arr );

let vegetables = ['Tomato', 'Cucumber', 'Potato']

console.log( vegetables.indexOf('Cucumber') );

console.log( vegetables.lastIndexOf('Cucumber') );

for (let vegetable of vegetables) {
    console.log( vegetables );
}

let cars = ["Opel", "Volvo", "BMW", "Toyota", "Nissan"];

cars.splice(1, 1);

console.log( cars );

cars.splice(2, 2, "Ferrari", "Honda");

console.log( cars );

let Phones = ["Samsung", "Apple"];

console.log( Phones.concat(["Xiaomi", "Nokia"]) );

console.log( arr.concat(["Lenovo","Sony"], ["Honor","Google"] ) )

let phoneLike = {
    Lg: "Fridge",
    length: 1.8
};

console.log( Phones.concat(phoneLike) );

let electronics = {
    0: "Ipad",
    1: "TV",
    2: "Laptop",
    [Symbol.isConcatSpreadable]: true,
    length: 3
};

console.log( Phones.concat(electronics) );

["Dog", "Cat", "Cow", "Sheep"].forEach(console.log);

let Apps=["Youtube","Instagram","Facebook","1"];

console.log( Apps.indexOf(1) );

console.log( Apps.indexOf(true) );

console.log( Apps.indexOf(null) );

console.log( Apps.includes(1) );