class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }
  size() {
    let i = 0;
    let current = this.head;
    while (current != null) {
      current = current.nextNode;
      i++;
    }

    console.log(`The size of the list is ${i} node`);
  }
  showHead() {
    console.log(this.head);
  }
  showTail() {
    let current = this.head;
    let previous = null;
    while (current != null) {
      previous = current;
      current = current.nextNode;
    }
    console.log(previous);
  }
  at(index) {
    let i = 0;
    let current = this.head;
    while (i != index) {
      current = current.nextNode;

      i++;
    }
    console.log(current);
  }
  pop() {
    let current = this.head;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return console.log(true);
      }

      current = current.nextNode;
    }
    return console.log(false);
  }
  find(value) {
    let i = 0;
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return console.log(`The value ${value} is at index N°${i}`);
      }

      current = current.nextNode;
      i++;
    }
    return console.log(null);
  }
  toString() {
    let current = this.head;
    let nodeString = "";
    while (current != null) {
      nodeString += `(${current.value})`;
      nodeString += " -> ";
      current = current.nextNode;
    }
    console.log(`${nodeString}null`);
  }
}
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append(3);
list.append(4);
list.append(5);

list.prepend(1);
list.prepend(0);
list.showTail();
list.pop();
list.showTail();
list.size();
list.find(4);
list.toString();
