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

console.log(filterByRating(books));



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