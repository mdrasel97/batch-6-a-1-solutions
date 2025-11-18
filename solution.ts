
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

class Person {
    name: string;
    age: number;
    constructor (name: string, age: number){
        this.name= name,
        this.age = age
    }
    getDetails():string{
        return(`'Name: ${this.name}, Age: ${this.age}'`)
    }
}


type Ratings = {
    title: string,
    rating: number,
}

function filterByRating(books : Ratings[]):Ratings[]{
    return books.filter(book => book.rating >= 4)

}



type User = {id: number, name: string, email: string, isActive: boolean}
function filterActiveUsers (users : User[]): User[]{
    return users.filter(user => user.isActive === true)
}


interface Book {
    title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,
}
function printBookDetails (myBook : Book){
return `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? "Yes" : "No"}`
}



function getUniqueValues<Y extends string | number>(array1: Y[], array2: Y[]): Y[] {
  let result: Y[] = [];
  let resultIndex = 0;

  for (let i = 0; i < array1.length; i++) {
    let exists = false;

    for (let j = 0; j < resultIndex; j++) {
      if (result[j] === array1[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[resultIndex] = array1[i];
      resultIndex++;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let exists = false;

    for (let j = 0; j < resultIndex; j++) {
      if (result[j] === array2[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[resultIndex] = array2[i];
      resultIndex++;
    }
  }

  return result;
}


// problem No. 8
type TotalPrice =
  { name: string, price: number, quantity: number, discount?: number }

function calculateTotalPrice(products: TotalPrice[]): number{
return products.reduce((total, product) => {
        const productTotal = product.price * product.quantity;
        const discountAmount = product.discount
            ? (productTotal * product.discount) / 100
            : 0;
        return total + (productTotal - discountAmount);
    }, 0);
}

