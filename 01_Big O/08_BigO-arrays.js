let array = [11, 3, 7, 9];

array.push(17); // we do not need to reindex any of item.it gonna add the item at the end of the array

// console.log(array);

array.pop(); // here also no need to reindex cause it will remove the item from the end

// push and pop are both O(1)

//***********************************************************************************************

let arr2 = array.shift(); // in this case it will remove the first item from the array.then we have reindex every item present on the array
console.log(arr2);

let aar1 = array.unshift(11); // it will
console.log(aar1);

//shift() & unshift() are both O(n) where, n is the number of item present in the array

//*******************************************************************************

let array9 = array.splice(1, 0, "hellow"); // this means in index 1 we gonna add "hellow" item and here 0 means we not gonna remove any item from the array
// O(n)

// suppose there is a new array

let newArr = [3, 4, 5, 6, 7, 8];
// here if we gonna search by "value" then it is O(n). because we have to seach from begining
// and if we search by index then it will be 0(1).because it will directly to that index
// this is the big advantage in the array we can search a particular item in an array of million item also.
// indexing is the big disadvantage in the array also because id we add new item in the beginning it have re index everything
