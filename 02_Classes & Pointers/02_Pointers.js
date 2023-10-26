let num1 = 4;
let num2 = num1;

num1 = 6;

console.log(num1);
console.log(num2);

// if later on we chnge the value of num1. then num2 gonna not change. it will remain the same
// that's what happes when we're not using pointer

//*********************************************************************************************************

let obj1 = { value: 1 };

let obj2 = obj1;

obj1.value = 3;

console.log(obj1); // {value : 3}
console.log(obj2); // {value : 3}

// it will refer the same memory address or point to the same memory address
// we have changed the value of obj1 to 3. & both obj1 & obj2 got changed. because both pointing to the same object

//*************************************************************************
// now if we take another object

let obj3 = { value: 7 };

obj2 = obj3; // by this we can move the pointer to different address. now both obj2 , obj3 ---> {value:7}

console.log(obj2); // {value : 7}

obj1 = obj2;
console.log(obj1); // {value : 7}

// now all obj1, obj2, obj3 --> {value : 7}
// and there is no variable poiting to {value : 1}. so we can't access this without any variable
// its taking up memory spaces. there is no use of this
// So, periodically JS gonna clean this things by a process called Garbage Collection. & it will remove that
