/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
//console.log(john, mary, joe) // above can be put into 1 line of code like soo....

let[john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages =["english", "french", "spanish", "german", "japanese"];  //array
let [johnNative, johnSecondary] = languages;   //this takes the first 2 parameters and ignores the rest
console.log(johnNative, johnSecondary)

let [,,maryNative, marySecondary] = languages; // the number of comments relate to the amount of items it skipped in the array
console.log(maryNative, marySecondary)


let langauges2 = {           // object
firstLanguage: "english",
secondLangauge: "french",
thirdLanguage: "german",
fourthLanguage: "japanese",
};

let {firstLanguage, thirdLanguage} = langauges2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"]; //array
let [favourite, secondFavourite,...others] = fruits;            /// takes the first to parameters seperatley and groups the remaining together in an arrray called rest
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {   //object
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let{brian, anna, ...rest} = favouriteFoods;  // selects brian and annas results seperatly and puts the others into an object called rest
console.log(brian);
console.log(anna);
console.log(rest);
