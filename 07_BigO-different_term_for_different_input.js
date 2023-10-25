function logItem(a, b) {
  // if they give a,b
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // O(a)

  for (let j = 0; j < n; j++) {
    console.log(j);
  }

  // O(b)
}

// when we add O(a) + O(b) = O(a + b)

// if it's nested loop

function logItem(a, b) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(a * b)
