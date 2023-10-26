function logItem(a, b) {
  // if they give a,b
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  // O(a)

  for (let j = 0; j < b; j++) {
    console.log(j);
  }

  // O(b)
}

// when we add O(a) + O(b) = O(a + b)

// if it's nested loop

function logItem(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}

// O(a * b)
