// suppose there is an array

let array = [1, 2, 3, 4, 5, 6, 7, 8];

// lets find a number in this array. example looking for number 1.

//most efficient way will be..ww will cut this array in half
// 1,2,3,4        5,6,7,8
//is the no 1 is in the 1st half or 2nd half ?
// so its in 1st half. we dont even need to look at 2nd half (it is not big deal in array of 8 item. but if we have million item in a array we have to cut it it half a million)

//we will do this again 1,2   3,4
// not in 2nd half remove it,

//do this again 1    2
// finally we got our desired result in 1st half

// 1,2,3,4      5,6,7,8        => 1
//1,2            3,4           => 2
// 1              2            => 3
//this also called divide and conquer rule

// 2 steps
// remember we have 8 items in an array . So, 2^3 = 8
// So, we turn this term to logarithm  log₂(8) = 3

//ex  log₂(1073,741,824) = ?  ===> 2^31 = 1073,741,824
// log₂(1073,741,824) = 31

// if we have billion item in an array. we have to search linearly billion times. if we use divide and conquer rule will get the desired result in 31 steps

//So, this is O(log n)
