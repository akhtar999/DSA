function logItem(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItem(4);

//So, oue code run n + n times or 2n..which is O(2n).
//It doesn't matter if it's 2n,3n, ....100n. id there ia a constant we will drop it.  O(n).
