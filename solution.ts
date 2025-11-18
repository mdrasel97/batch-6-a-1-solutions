// problem No. 1
type Formatting = string | number | boolean

function formatValue (input: Formatting): Formatting{
if(typeof input === 'string'){
    return input.toUpperCase()
}
else if(typeof input === 'number'){
    return input * 10
}
else if(typeof input === 'boolean'){
    return !input
}
else{
    return input
}
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// problem No. 2
type Length = string | any[];
function getLength (value : Length): number{
    if(typeof value === 'string'){
        return value.length
    }else if(Array.isArray(value)){
        return value.length
    }
    else{
        return value
    }

}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// problem No. 4
type Ratings = {
    title: string,
    rating: number,
}

function filterByRating(books : Ratings[]):Ratings[]{
    return books.filter(book => book.rating >= 4)

}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));



// problem No. 5
type User = {id: number, name: string, email: string, isActive: boolean}
function filterActiveUsers (users : User[]): User[]{
    return users.filter(user => user.isActive === true)
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// problem No. 6
interface Book {
    title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,
}
function printBookDetails (myBook : Book){
return `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? "Yes" : "No"}`
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// console.log(printBookDetails(myBook))

// problem No. 7

function getUniqueValues (Array1: number[], Array2: number[]){

}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

// problem No. 8
function calculateTotalPrice(){

}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
