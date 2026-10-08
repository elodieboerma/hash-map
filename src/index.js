class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    const newNode = new Node(key, value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  prepend(key, value) {
    const newNode = new Node(key, value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curValue = this.head;
      this.head = newNode;
      this.head.next = curValue;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }
  headMethod() {
    //returns undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      return this.head.value;
    }
  }
  tailMethod() {
    //returns undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      return current.value;
    }
  }
  nodeAt(index) {
    //returns undefined if no node at index
    if (this.head == null || index >= this.size()) {
      return undefined;
    } else {
      let current = this.head;
      for (var i = 0; i < index + 1; i++) {
        if (i == index) {
          return current;
        }
        current = current.next;
      }
    }
  }
  pop() {
    //removes the head node and returns its value, undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      let oldHead = this.head;
      let newHead = this.head.next;
      let newNextNode = newHead.next;
      //this.head = this.head.next;
      this.head = newHead;
      this.head.next = newNextNode;
      return oldHead.value;
    }
  }
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  findIndex(value) {
    //returns the index of the node containing the value, -1 if not found, or index of 1st instance/copy
    let current = this.head;
    let indexNum = 0;
    while (current != null) {
      if (current.value == value) {
        return indexNum;
      }
      current = current.next;
      indexNum++;
    }
    return -1;
  }
  toString() {
    if (this == null) {
      return undefined;
    } else {
      let current = this.head;
      let str = "";
      while (current != null) {
        str += `(${current.value}) -> `;
        current = current.next;
      }
      return str + "null";
    }
  }

  // extra credit methods from here on down
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let currentNode = this.head;
      let insertionPoint = this.nodeAt(index);
      while (currentNode != null) {
        let currentIndex = this.findIndex(currentNode.value);
        if (currentIndex == index - 1) {
          for (let value of values) {
            const newNode = new Node(value);
            currentNode.next = newNode;
            newNode.next = insertionPoint;
            currentNode = currentNode.next;
          }
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let currentNode = this.head;
      let removalPoint = this.nodeAt(index);
      while (currentNode != null) {
        let currentIndex = this.findIndex(currentNode.value);
        if (currentIndex == index - 1) {
          let newNextNode = removalPoint.next;
          currentNode.next = newNextNode;
        }
        currentNode = currentNode.next;
      }
    }
  }
}


export class HashMap {
    constructor(capacity = 16) {
        this.capacity = capacity;
        this.buckets = new Array(this.capacity);
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        let primeNumber  = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }
        console.log(`${key}: ${hashCode}`);
        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket;
        if (index < 0 || index >= this.buckets.length) {
          throw new Error("Trying to access index out of bounds");
        }
        let newNode = new Node(key, value);
        if (bucket == undefined) {
          bucket = new LinkedList();
          this.buckets[index] = bucket;
        }
        bucket.append(newNode);
        //if array length exceeds load factor, copy to new hashmap with double capactiy
        if (this.capacity * this.loadFactor < this.lengthOfArray()) {
          console.log(`Current array length (${this.lengthOfArray()}) exceeds capacity*load factor(${this.capacity} * ${this.loadFactor})`);
          let entriesArray = this.entries();
          console.log(`entriesArray: ${entriesArray}`);
          this.capacity *= 2;
          this.clear();
          console.log(this);
          console.log(`capacity: ${this.capacity}`);
          //make sure this works even when there is more than one node in a bucket
          for (let i = 0; i < entriesArray.length; i++) {
            let entry = entriesArray[i];
            let key = entry[0];
            let value = entry[1];
            this.set(key, value);
          }
        }        
    }

    get(key) {
        let index = this.hash(key);
        if (index < 0 || index >= buckets.length) {
          throw new Error("Trying to access index out of bounds");
        }
        if (this.nodeAt(index) == undefined) {
            return null;
        }
        return this.nodeAt(index).head.next.value;
    }

    has(key) {
        let index = this.hash(key);
        if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}
        if (this.nodeAt(index) == undefined) {
            return false;
        }
        return true;
    }

    remove(key) {
        let index = this.hash(key);
        if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}
        if (this.nodeAt(index) == undefined) {
            return false;
        } else {
            this.nodeAt(index).pop();
            return true;
        }
    }

    lengthOfArray() {
      let count = 0;
      for (let i = 0; i < this.capacity; i++) {
        let bucket = this.buckets[i];
        if (bucket != undefined) {
          count++;
        }
      }
      console.log(`lengthOfArray: ${count}`);
      return count;
    }

    clear() {
        this.buckets = [];
    }

    //nodeAt() and toString() are LinkedList methods, not HashMap methods
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
          if (this.buckets[i] != undefined) {
            for (let j = 0; j < this.buckets[i].size(); j++) {
              let node = this.buckets[i].nodeAt(j);
              if (node != undefined) {
                keysArray.push(node.key.key);
              }
            }
          }
        }
        console.log(`keysArray: ${keysArray}`);
        return keysArray;
    }

    values() {
        let valuesArray = [];
        let keysArray = this.keys();
        for (key in keysArray) {
            let value = this.get(key);
            valuesArray.push(value);
        }
        return valuesArray;
    }

    //correct so that it works to run through each bucket, not just on buckets
    entries() {
        let keysArray = this.keys();
        let valuesArray = this.values();
        let entriesArray = [];
        for (let i = 0; i < keysArray.length; i++) {
            entriesArray.push([keysArray[i], valuesArray[i]]);
        }
        return entriesArray;
    }
}
