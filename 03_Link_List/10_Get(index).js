class Node {
    constructor(value) {
      this.value = value;
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
       push(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
      get(index){
          if(index < 0 || index>= this.length) return undefined;
          let temp = this.head
          for(let i=0 ; i<index; i++){
              temp = temp.next
          }
          return temp;
      }

  }
  const newLinkedList = new LinkedList(1);
  newLinkedList.push(2);
  newLinkedList.push(3);
  newLinkedList.push(4);
