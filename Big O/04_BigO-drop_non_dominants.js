// drop non-dominants is another way that we simplify BigO notation

function logItem(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //nested loop
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    // 2nd loop
    console.log(k);
  }
}

logItem(5);

// nested loop ran O(n^2)
// 2nd loop ran O(n)

// together O(n^2) + O(n) = O(n^2 + n)

// So, if n=100, then n^2 will be = 1000 times and n will be added at last . its really not effecting the nmber of equation
//So, n^2 = the dominant term and n = the non dominant term by itself. so we will remove the +n

//finally its O(n^2)
