class LinkedList {
  constructor(value) {
    //create new node
  }
  push(value) {
    //create new node
    //add node to end
  }
  unshift(value) {
    //create new node
    //add node to begginning
  }
  insert(index, value) {
    //create new node
    //insert node
  }
}

// So, they all create a new node. and we don't want to rewrite this code for different times
// So, we will create a separate class for creating new node. that class gonna call by class LinkedList{}

class Node {
  constructor(value) {
    this.value = value; // (head) 4--> null (tail)
    this.next = null;
  }
}

const newNode = new Node(4); // new keyword gonna call the constructor and create new node of value 4

// {
//     value: 4,
//     next: null,
//  }

//****************************************************************************************************

class Node {
  constructor(value) {
    this.value = value; // (head) 4--> null (tail)
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

// now we will create a new link list out of it

const newLinkedList = new LinkedList(4);

// {
//     value: 4,                  head & tail (same) --> 4-> null
//     next: null,
//  }
